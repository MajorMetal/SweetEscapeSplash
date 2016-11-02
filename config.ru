use Rack::Static, 

root: "public", urls: ["/images", "/js", "/css"]

header_options = {
  "Content-Type" => "text/html",
  "Cache-Control" => "public, max-age=86400",
}

map "/" do
  run ->(env) { [200, header_options, File.open('/public/index.html', File::RDONLY)] }
end

map "/support" do
  run ->(env) { [200, header_options, File.open('/public/support/support.html', File::RDONLY)] }
end