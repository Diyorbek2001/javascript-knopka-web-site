    const tabs = document.querySelectorAll('.tabheader__item'),tabsParent = document.querySelector('.tabheader__items'), tabContent = document.querySelectorAll('.tabcontent');
    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('none');
            item.classList.remove('show','fade');
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }
    function showTabContent(i = 0) {
        tabContent[i].classList.add('show','fade');
        tabContent[i].classList.remove('none');
        tabs[i].classList.add('tabheader__item_active')
    }
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click' , (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')){
            tabs.forEach((item , i) => {
                if(e.target == item){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }

    })
    /*-------2-usuli------------*/
    // tabs.forEach((item,i) => {
    //     item.addEventListener('click', () => {
    //         hideTabContent()
    //         showTabContent(i)
    //     })
    // })

    