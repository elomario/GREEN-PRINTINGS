#!/usr/bin/env python3
from http.server import HTTPServer, CGIHTTPRequestHandler
HTTPServer(('', 8002), CGIHTTPRequestHandler).serve_forever()