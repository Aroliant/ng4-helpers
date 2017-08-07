# Angular 4 Data Helpers

### Usage

#### Import the Helper

```js
import { DataHelper } from 'ng4-helpers';
```

#### Create an Helper Object

```js
var helper = new DataHelper()
```

#### Encoding 

##### Encoding all Objects

```js
helper.addAll(object) //returns Encoded URL Data
```

##### Encoding one by one

```js
helper.addParam("username","name1")
helper.addParam("password","123")

var encodedURL = helper.getData() //returns Encoded URL Data
```

##### Clearning the data

```js
helper.clear()
```
