# Arré SDE1 Test - WhatsApp Mock
**Submission By Prayas Kumar Singh**
BITS ID - 2019A8PS0439G
email: f20190439@goa.bits-pilani.ac.in
Stack used : MongoDB + Mongoose, Node.js, Express.js
## Contents of this readme file
 - Directory Structure
 - Schema Design
 - APIs
 - Few other things 

## Directory Structure
 - **config** : this folder holds env files, mongo config, logger config, etc
 - **controllers** : this folder holds all controllers, also where DB calls happens
 - **models** : holds schema for user, group and messages
	 - sub directry of **message** hold schemas for types of messages
 - **routes** : holds routes for user, group and messages

## Schema Design
All required feilds throw a customised error if a certain property is not provided at the time of creation and saving in DB, using the message attribute.

**User**

 - _id 
	- type changed to String to hold +91-(987)-654-3210 type identies
	- alias set to 'phone', for easier queries
- name: type string, always required

**Group**

 - name : type string
 - memebers : type **array** of **Users** 
	 - createdAt and updatedAt properties added using  timestamps feautre of mongoDB
	 
**Message**

 - from: type String, required true, **reference set to  User**
 - to: type String, required true, **reference set to Group**
 - **messageType** used **discriminator** to provide different kinds of messages like **Image Type Message** and **Text Type Message**
 
 **Text Message**
 - extends  **Message** model
 - message: type String

**Image Message**
 - extends  **Message** model
 - image link to possibly something like **AWS**

## APIs

 - **IMP** *For simplicity of project all API endpoints use post request.*
 - /api is used for distingusing between backend and frontend (possibly like a react or vue app).

### User

 - /api/user/create - create a new user with name and phone

### Message

 - /api/group/getMessages - gets messages with pagination
 - /api/group/text - used for sending text message in a specified group
 - /api/group/image - used for sending image message in a specified group

### Group

 - /api/group/create - create a new group
 - /api/group/addUser - adds provided user to a provided group
 - /api/group/removeUser - removes provided user to a provided group
 - /api/group/getAllUsers - lists all users in provided group

## Few other things
- **logger** - added logging feature to debug for production
- uploading a image message is not implemented. For that I would have used file-upload or bus-boy node module alsong with form methods.
