import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";



export let aboutusObj = {

    'innerHTMLh': '<h1> About Us </h1>  <p> our approch is to give you WOMEN a platform that permits you to write and share  your questions and problems with other clients. The themes that we want to discuss ,are themes that are rarely discussed in other consultant websites.<br/> we also allow you to suggest other themes that you think may interest others too. <br/> so here you Go Women!<br/> SPEAK YOUR HEART OUT </p> <br/> <br/>'
}


export let footerArr = [
    {
        Icon: <FontAwesomeIcon className='fa-1.5x' icon={faInstagram}></FontAwesomeIcon>,
        url: "contact us"
    },
    {
        Icon: <FontAwesomeIcon className='fa-1.5x' icon={faFacebook}></FontAwesomeIcon>,
        url: "follow"
    },

    {
        Icon: <FontAwesomeIcon className='fa-1.7
        x' icon={faTwitter}></FontAwesomeIcon>,
        url: "follow"
    },
    {
        Icon: <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>,
        url: "follow"
    },
    {
        Icon: <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>,
        url: "follow"
    }
];

export let footerTitleObj = {
    'innerHTML': '<h1> contact us on: </h1>'
}


export let navArr1 = [
    {
        Icon: <FontAwesomeIcon className='fa-2x' icon={faHome}></FontAwesomeIcon>,
        title: 'Home',
        url: "/"
    },
    {
        Icon: <FontAwesomeIcon className='fa-2x' icon={faRegistered}></FontAwesomeIcon>,
        title: 'Sign up',
        url: "/Signup"
    },

    {
        Icon: <FontAwesomeIcon className='fa-2x' icon={faQuestion}></FontAwesomeIcon>,
        title: 'Ask',
        url: "/Ask"
    }

];

export let navArr2 = [

    {
        title: 'Login',
        url: "/Login"
    },

    {
        title: 'Ask',
        url: "/Ask"
    }

];

export let webHeader = {
    'innerHTML': '<h1> speak your heart out </h1>'
}


export let themesArr = [


    {
        src: './images/crime.jpg',
        title: 'Lets get started',

    },
    {
        src: './images/leaves.jpg',
        title: 'Privacy&Terms',

    },
    {
        src: './images/love-shouldnt-hurt.jpg',
        title: 'Lets get started',

    },
    {
        src: './images/drug.jpg',
        title: 'Privacy&Terms',

    },
    {
        src: './images/womanviolence.jpg',
        title: 'Lets get started',

    },
    {
        src: './images/looking-t.jpg',
        title: 'Privacy&Terms',

    },
    {
        src: './images/disapointed.jpg',
        title: 'Lets get started',

    },
    {
        src: './images/cryin.jpg',
        title: 'Privacy&Terms',

    },
    {
        src: './images/gras.jpg',
        title: 'Privacy&Terms',

    }
];


export let TitleAndP = {

    'HTMLTitleh': '<h1> My message to you women: </h1>',
    'HTMLParag': '<p> our feelings is what makes us human, so dont be shy to show it, </br> </br> dont be shy to feel weakness,and its ok if you cry </br> you can also feel sadness, and sometimes you  may wish to die, </br>but eventually you will overcome it all, cause your limit is the sky.</br></br> you can also mess it up,and feel disapointed too,</br> and maybe fail to clean it up,and never know what to do. </br> BUT it is only a matter of time and you will figure it out,</br> and if it can help you , just speak your heart out! </p>'
}

export let askNavArr = [


    {
        title: 'my child',
        url: 'mychild',
        isopen: false,
        options: [

            {
                title: 'ADHD',
                url: "adhd"
            },
            {
                title: 'hearing impairment',
                url: "hearing "
            },
            {
                title: 'visual impairment',
                url: "visual"
            },

            {
                title: 'bullying',
                url: "bullying"
            }


        ]
    },

    {
        title: 'Violence ',
        url: 'violence',
        isopen: false,
        options: [

            {
                title: 'physical violence',
                url: "physical "
            },

            {
                title: 'sexsual violence',
                url: "sexual "
            },
            {
                title: 'verbal violence',
                url: "verbal "
            }

        ]
    }




];

export let AskNAvIcons = [
    {
        Icon: <Person className='fa-2x' />,
        url: "",
        isopen: false,
        options:
            [
                {
                    title: 'Your profile',
                    url: "profile",

                },
                {
                    title: 'your friends ',
                    url: "",

                },
                {
                    title: 'delete',
                    url: "",

                },
                {
                    title: 'Help',
                    url: "",

                },
                {
                    title: 'Settings',
                    url: "",

                }

            ]
    },

    {
        Icon: < Notifications />,
        url: "",
        isopen: false,
        options:
            [
                {
                    title: '',
                    url: "",

                },

            ]
    },
    {
        Icon: < Chat />,
        url: "",
        isopen: false,
        options:
            [
                {
                    title: '',
                    url: "",

                },

            ]
    }
];

export const Users = [
    {
        id: '1',
        profilePicture: './images/anonymous.jpg',
        username: "lole",
    },
    {
        id: '2',
        profilePicture: './images/crime.jpg',
        username: "yara",
    },
    {
        id: '3',
        profilePicture: './images/crime.jpg',
        username: "Alex Durden",
    },
    {
        id: '4',
        profilePicture: './images/crime.jpg',
        username: "Dora Hawks",
    },
    {
        id: '5',
        profilePicture: './images/anonymous.jpg',
        username: "anonymous",
    },
    {
        id: '6',
        profilePicture: './images/crime.jpg',
        username: "Shirley Beauchamp",
    },
]

export let Posts = [
    {
        id: "1",
        desc: "hi , i would like to share my  problem with you but i have to say that i am very embarresed, should i ?? my husband is beating me and i cant take it any more ;,i dont know what to do , can you help me please ??",
        date: "5 mins ago",
        userId: "1",
        like: 32,
        comments: 9,
        photo: './images/crime.jpg',
    },
    {
        id: "2",
        desc: "Love For All, Hatred For None.",
        date: "10 mins ago",
        userId: "5",
        like: 0,
        comments: 9,
        photo: './images/headache.jpg',
    },
    {
        id: "3",
        desc: "hi everyone, so i am having a really serious problem , i am addicted to gras and i really really want to stop it , i am harming my family an it is driving me crazy , i tried lots of ways to overcome it but nothing helped me, any ideas how can i stop being addicted ??",
        date: "45 mins ago",
        userId: "3",
        like: 0,
        comments: 50,
        photo: './images/gras.jpg',
    }

]