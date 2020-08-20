from base64 import b64decode
import os
import pickle

def register_on_submit(email, image):
    header, encoded = image.split(",", 1)
    try:
        try:
            data = pickle.loads(open("data.pickle", "rb").read())
        except Exception as e:
            print(e.__cause__)
            data = dict()
            with open("data.pickle", "wb") as f:
                f.write(pickle.dumps(data))
        data = pickle.loads(open("data.pickle", "rb").read())
        data[email] = encoded
        with open("data.pickle", "wb") as f:
            f.write(pickle.dumps(data))
    except Exception as e:
        print(e.__cause__)
        return "Registration failed!"
    return "Registration Successful!"