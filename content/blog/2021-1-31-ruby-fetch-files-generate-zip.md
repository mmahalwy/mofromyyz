---
title: "Fetching files and generate zip file"
date: "2021-01-31"
description: "How to fetch files from CDN and generate a zip file in Ruby"
readTime: "1 min read"
category: "Code Bites"
---

Here's a practical approach for downloading remote files and combining them into a compressed archive using Ruby on Rails.

## Main Method

The `generate_zip` function handles the core logic:

```ruby
def generate_zip
  filename = "filename.zip"
  temp_file = Tempfile.new(filename)
  files_to_zip = []

  # Initialize the temp file as a zip file
  Zip::OutputStream.open(temp_file) { |zos| }

  # Add files to the zip file as usual
  Zip::File.open(temp_file.path, Zip::File::CREATE) do |_zip|
    file_urls.each do |file_url|
      file_to_zip = get_document_for_zip(file_url)
      files_to_zip << file_to_zip
      _zip.add('some file name', file_to_zip)
    end
  end

  # Read the binary data from the file
  zip_data = File.open(temp_file.path)
  zip_data
rescue StandardError => e
  # do something
ensure
  temp_file.close
  temp_file.unlink
  files_to_zip.each do |file_to_zip|
    file_to_zip.close
    file_to_zip.unlink
  end
end
```

## Helper Method

The `get_document_for_zip` method retrieves individual files from CDN:

```ruby
def get_document_for_zip(file_url)
  file_to_zip = Tempfile.new('some file name')
  file_to_zip.binmode
  file_to_zip.write(HTTParty.get(file_url))
  file_to_zip.flush
  file_to_zip
end
```

## Controller Integration

```ruby
def export
  respond_to do |format|
    format.zip do
      send_data generate_zip, filename: "filename.zip", type: "application/zip"
    end
  end
end
```

The solution avoids sending temporary files directly to browsers because they may be deleted before Rails completes transmission. Instead, it reads binary data first, then streams it as an attachment.
