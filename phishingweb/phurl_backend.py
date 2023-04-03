'''

#### PhURL - Web Based Phishing URL Detection & Learning Platform ####
#### Created By - Ruchira Edirisinghe ####
#### Plymouth Final Year Project - 2023 ####
#### Final Build - Backend ####

'''

import numpy as np
import pandas as pd
import re
from sklearn.preprocessing import StandardScaler
import joblib
from urllib.parse import urlparse
from tld import get_tld
from urllib.parse import urlparse
from tld import get_tld
import os.path
from urllib.parse import urlparse

# Load model
model = joblib.load('phishingweb/lgb_model.joblib')


# Define feature extraction functions

## Feature 1: Check whether the URL has a IPV address or not 

def having_ip_address(url):
    match = re.search(
       
        # IPv4
        '(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
        '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  
        
        # IPv4 in hexadecimal format
        '((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)' 
        
        # Ipv6
        '(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}', url)  
    
    # print match group or No matching pattern found by scanning them.
    
    if match:
        return 1
    else:
        return 0

def abnormal_url(url):
    hostname = urlparse(url).hostname
    hostname = str(hostname)
    match = re.search(hostname, url)
    
    # print match group or No matching pattern found by scanning them.
    
    if match:
        return 1
    else:
        return 0

## Feature 2: Scan whether the URL is a Google Link

from googlesearch import search

def google_index(url):
    site = search(url, 5)
    return 1 if site else 0


# Scan how many dots the URL contains

def count_dot(url):
    count_dot = url.count('.')
    return count_dot


## Feature 3: Scan how many 'www's the URL contains

def count_www(url):
    url.count('www')
    return url.count('www')



## Feature 4: Scan how many '@'s the URL contains

def count_atrate(url):
     
    return url.count('@')



## Feature 5: Scan how many ' / 's the URL contains

def no_of_dir(url):
    urldir = urlparse(url).path
    return urldir.count('/')


## Feature 6: Scan how many embeds the URL contains

def no_of_embed(url):
    urldir = urlparse(url).path
    return urldir.count('//')



## Feature 7: Scan whether a URL shortening method has been used

def shortening_service(url):
    match = re.search('bit\.ly|goo\.gl|shorte\.st|go2l\.ink|x\.co|ow\.ly|t\.co|tinyurl|tr\.im|is\.gd|cli\.gs|'
                      'yfrog\.com|migre\.me|ff\.im|tiny\.cc|url4\.eu|twit\.ac|su\.pr|twurl\.nl|snipurl\.com|'
                      'short\.to|BudURL\.com|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|fic\.kr|loopt\.us|'
                      'doiop\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|'
                      'db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tinyurl\.com|ow\.ly|bit\.ly|ity\.im|'
                      'q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|'
                      'x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|'
                      'tr\.im|link\.zip\.net',
                      url)
    if match:
        return 1
    else:
        return 0
    
    

## Feature 8: Scan the protocol the web URL is using

def count_https(url):
    return url.count('https')

def count_http(url):
    return url.count('http')



## Feature 9: Scan is there are any spaces contained in the URL

def count_per(url):
    return url.count('%')


def count_ques(url):
    return url.count('?')


def count_hyphen(url):
    return url.count('-')


def count_equal(url):
    return url.count('=')




## Feature 10: Scan the length of the URL

def url_length(url):
    return len(str(url))



## Feature 11: Scan the Hostname's length

def hostname_length(url):
    return len(urlparse(url).netloc)



## Feature 12: Scan for suspicious words inside the URL

def suspicious_words(url):
    match = re.search('PayPal|login|signin|bank|account|update|free|lucky|service|bonus|ebayisapi|webscr',
                      url)
    if match:
        return 1
    else:
        return 0
    
    

## Feature 13: Scan the number of digits used

def digit_count(url):
    digits = 0
    for i in url:
        if i.isnumeric():
            digits = digits + 1
    return digits



## Feature 14: Scan the number of letters used

def letter_count(url):
    letters = 0
    for i in url:
        if i.isalpha():
            letters = letters + 1
    return letters



## Feature 15: Scan the First Directory Length

def fd_length(url):
    urlpath= urlparse(url).path
    try:
        return len(urlpath.split('/')[1])
    except:
        return 0
    
    

## Feature 16: Scan the Length of Top Level Domain

def tld_length(tld):
    try:
        return len(tld)
    except:
        return -1




## Prediction

def main(url):
    
    extract_features = []
    
    extract_features.append(having_ip_address(url))
    extract_features.append(abnormal_url(url))
    extract_features.append(count_dot(url))
    extract_features.append(count_www(url))
    extract_features.append(count_atrate(url))
    extract_features.append(no_of_dir(url))
    extract_features.append(no_of_embed(url))
    
    extract_features.append(shortening_service(url))
    extract_features.append(count_https(url))
    extract_features.append(count_http(url))
    
    extract_features.append(count_per(url))
    extract_features.append(count_ques(url))
    extract_features.append(count_hyphen(url))
    extract_features.append(count_equal(url))
    
    extract_features.append(url_length(url))
    extract_features.append(hostname_length(url))
    extract_features.append(suspicious_words(url))
    extract_features.append(digit_count(url))
    extract_features.append(letter_count(url))
    extract_features.append(fd_length(url))
    tld = get_tld(url,fail_silently=True)
    
    extract_features.append(tld_length(tld))
    
    return extract_features




# Predict Function

def get_prediction_from_url(test_url):
    features_test = main(test_url)
    features_test = np.array(features_test).reshape((1, -1))

    # Predict result probabilities
    pred_probs = model.predict_proba(features_test)

    # Get the probability of each class
    safe_prob = pred_probs[0][0]
    defacement_prob = pred_probs[0][1]
    phishing_prob = pred_probs[0][2]
    malware_prob = pred_probs[0][3]

    # Get the predicted class
    pred_class = int(model.predict(features_test)[0])

    if pred_class == 0:
        res = "SAFE"
        prob = safe_prob
    elif pred_class == 1:
        res = "DEFACEMENT"
        prob = defacement_prob
    elif pred_class == 2:
        res = "PHISHING"
        prob = phishing_prob
    elif pred_class == 3:
        res = "MALWARE"
        prob = malware_prob

    # Round the probability to 2 decimal places
    prob = round(prob * 100, 2)
    prob_str = str(prob) + "%"

    return res, prob_str


