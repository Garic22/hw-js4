
obj = {
	mirrow : 'big',
	money : 50,
	key : 'home'
}

function del (arg) {
	delete this[arg];
}
	obj.del = del
	obj.del("mirrow")

function plus (name, value) {
	this[name] = value
}
	obj.setParam = plus
	obj.setParam("ccc", 10)



function LibraryBook (title,year, author) {
	var title = title;
	var year = year;
	var author = author;
	var readerName = '';
	var readerDate = '';

function giveTheBook (client) {
	readerName = client;
	readerDate = new Date();
}
this.getBookinfo = function () {
	if (readerDate){
		return readerDate.toLocaleDateString();
	}
	return null;
}
this.getTheBook = function (client) {
	if (readerName == true){
		return  null;
	} 
	giveTheBook(client);	
	return title;
}	
this.returnBook = function () {
	readerName = '';
	readerDate = '';
	}
}
var book = new LibraryBook("Харьков","2019", "Игорь")
book.getTheBook("Саша")
book.getBookinfo()




function Sigma () {}
	Sigma.prototype.addProperty = function (name, value) {
		this[name] = value;
	}
	var obj = new Sigma
	obj.addProperty('student', 'Igor')

		
		