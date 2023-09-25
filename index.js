let testimonialsList = [
    {
        imageUrl:'https://th.bing.com/th/id/OIP.VDXZUYfWKlwGSke1Fr-wuwAAAA?pid=ImgDet&rs=1',
        description: "This product changed my life! It's amazing and so easy to use.",
        name: "John Doe",
        company: "ABC Inc."
    },
    {
        imageUrl:'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
        description: "I couldn't be happier with the results. It exceeded my expectations.",
        name: "Jane Smith",
        company: "XYZ Co."
    },
    {
        imageUrl:'https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png',
        description: "Outstanding quality and service. I highly recommend it to everyone.",
        name: "James Brown",
        company: "123 Corp."
    }
];
let index=0
let testimonial=testimonialsList[index]
const testimonialCard=document.querySelector('.testimonial-card');
const left=document.getElementById('left')
const right=document.getElementById('right')

function createAndAppendTestimonial(testimonial){
    const image=document.createElement("img");
    image.src=testimonial.imageUrl;
    image.classList.add("testimonial-image");
    testimonialCard.appendChild(image)
    //createing name 
    const testimonialName=document.createElement("h1");
testimonialName.textContent=testimonial.name;
testimonialName.classList.add("testimonial-name")
testimonialCard.appendChild(testimonialName)
//creating description
const testimonialDescription=document.createElement("p");
testimonialDescription.textContent=testimonial.description;
testimonialDescription.classList.add("testimonial-description")
testimonialCard.appendChild(testimonialDescription)
//creating company name
const testimonialCompany=document.createElement("h2");
testimonialCompany.textContent=testimonial.company;
testimonialCompany.classList.add("testimonial-company")
testimonialCard.appendChild(testimonialCompany)
}
createAndAppendTestimonial(testimonial)
left.onclick=()=>{
    if(index>0){
        testimonialCard.textContent=''
        index-=1
        createAndAppendTestimonial(testimonialsList[index])
    }
}
//onclick right image
right.onclick=()=>{
    if(index<2){
        testimonialCard.textContent=''
        index+=1
        createAndAppendTestimonial(testimonialsList[index])
    }
}


let toggle = document.getElementById('toggle');
const listContainer = document.querySelector('.list-elements');
toggle.onclick = () => {
    listContainer.classList.toggle("display");
}