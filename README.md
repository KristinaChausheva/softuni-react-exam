// STORAGE RULES

rules*version = '2';
service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\**} {
allow read;
allow write: if
request.auth != null &&
request.resource.size < 2 _ 1024 _ 1024 && //2MB
request.resource.contentType.matches('image/.\_')
}
}
}

// FIRESTORE RULES

rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
// Listings
match /reviews/{review} {
allow read;
allow create: if request.auth != null && request.resource.data.imgUrls.size() < 7;
allow delete: if resource.data.userRef == request.auth.uid;
}

    // Users
    match /users/{user} {
    	allow read;
    	allow create;
    	allow update: if request.auth.uid == user
    }

}
}
