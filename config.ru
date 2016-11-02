use Rack::Static, root: "assets", urls: ["/js", "/css", "/images", "/pdfs", "/videos"]

header_options = {
  "Content-Type" => "text/html",
  "Cache-Control" => "public, max-age=86400",
}

map "/" do
  run ->(env) { [200, header_options, File.open("views/index.html", File::RDONLY)] }
end

map "/support" do
  run ->(env) { [200, header_options, File.open("views/support.html", File::RDONLY)] }
end
