"""
    It takes the url from the request, removes the https:// from the url if it exists, and then passes
    the url to the get_prediction_from_url function. The result and probability are then returned in the
    response
    
    :param request: The request object contains all the information about the request that was made to
    the server
    :return: The result and probability of the prediction.
"""

# from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# import your prediction function and other required modules here
from .phurl_backend import get_prediction_from_url
from .serializers import UrlPredictionSerializer

@api_view(['POST'])
def predict(request):
    serializer = UrlPredictionSerializer(data=request.data)
    if serializer.is_valid():
        url = serializer.validated_data['url']

        # Check if url starts with https://
        if url.startswith('https://'):
            # Remove https:// from url
            url = url.replace('https://', '')

        result, prob = get_prediction_from_url(url)
        response_data = {
            'result': result,
            'probability': prob
        }
        return Response(response_data)
    else:
        return Response(serializer.errors, status=400)
    

#******************************************************#

@api_view(['POST'])
def check_phishing(url):
    # Check if url starts with http or https
    if url.startswith('http://'):
        return "This Link is Malware"
    
    # Check if url is only numbers and random letters
    if url.isalnum():
        return "This Link is Malware"
    
    return "This Link is Safe"




