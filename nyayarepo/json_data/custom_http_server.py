import http.server  
import socketserver  
  
class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):  
    def end_headers(self):  
        self.send_header('Access-Control-Allow-Origin', '*')  
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')  
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')  
        super().end_headers()  
  
    def do_OPTIONS(self):  
        self.send_response(200, "ok")  
        self.send_header('Access-Control-Allow-Origin', '*')  
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')  
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')  
        self.end_headers()  
  
PORT = 8000  
  
with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:  
    print(f"Serving at port {PORT}")  
    httpd.serve_forever()  