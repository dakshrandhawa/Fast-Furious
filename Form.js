class Form{
    constructor(){

    }

    display(){
        var title = createElement('h3')
        title.html('Fast And Furious')
        title.position(300,0)

        var input = createInput();
        var button = createButton('Lets Go');
        input.position(300, 150);
        button.position(400, 200);
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            var greeting = createElement('h1')
            greeting.html('Hello '+ name)
            greeting.position(300, 150);

        })

    }
}