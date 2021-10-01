var lastIndex = 0;
        var images = document.querySelectorAll('.container img');

        images.forEach((item,index)=>{
            document.querySelectorAll('.bullet-single')[index]
            .addEventListener('click', ()=>{
                var lastImage = document.querySelectorAll('.container img')[lastIndex];
                var actualImage = document.querySelectorAll('.container img')[index];

                document.querySelectorAll('.bullet-single')[lastIndex]
                .classList.remove('active-bullet');

                document.querySelectorAll('.bullet-single')[index]
                .classList.add('active-bullet');

                lastImage.style.opacity = 0;
                actualImage.style.opacity = 1;

                lastIndex = index;
            })
        })