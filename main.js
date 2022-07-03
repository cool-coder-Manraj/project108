function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    var classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N4JgqMKbI/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
cat = 0;
dog = 0;
lion = 0;
cow = 0; 

function gotResults(error, results)
{
    if(error, result)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("times-heard").innerHTML = 'dectected dog - ' + dog + 'detected cat - ' + cat + 'detected cow - ' + cow + 'detected lion' + lion;
        document.getElementById("sound").innerHTML = 'results';
        document.getElementById("times-heard").style.color = "rgb("+ random_number_r + ", "random_number_g + ", "random_number_b")";
        document.getElementById("sound").style.color = "rgb("+ random_number_r + ", "random_number_g + ", "random_number_b")";
        image = document.getElementById("image");

        if(barking)
        {
            image.src = dog.png;
            dog = dog + 1;
        }
        else if(meowing)
        {
            image.src = cat.jpg;
            cat = cat + 1;
        }
        else if(mooing)
        {
            image.src = cow.jpg;
            cow = cow + 1;
        }
        else if(roaring)
        {
            image.src = lion2.jpg;
            lion = lion + 1;
        }
        else
        {
            {
                image.src = ear.jpg;
            }
        }
    }
}