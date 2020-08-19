# broadcast

A Node.js PGP-like message sending app
Currently in Development Stage.


##Goal
Our prime goal is to provide end-to-end information broadcast.

We are worried about organisations and government spying on our messages.


## API description:


### Endpoints:

- /allKey
	>Get **all** entities from the **public key table** in **JSON**.

- /uploadKey
  >Upload a **single key file** as **request**.

- /uploadMessage
  >Upload a **single message text file** as **request**.

- /getByMail
  >Get a **single entity** from the **public key table** in **JSON**.

- /messageByMail
  >Get **all** the messages broadcasted by **single email** sender.
