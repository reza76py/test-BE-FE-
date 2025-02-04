from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

class WordCountView(APIView):
    parser_classes = [JSONParser]  # Ensure JSON data is parsed

    def post(self, request):
        text = request.data.get("text", "")
        word_count = len(text.split())  # Count words
        return Response({"word_count": word_count})
