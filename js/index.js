fetch('/json/index.json')
  .then(res => res.json())
  .then(shiva => {

    //nav 
document.getElementById('nav1').innerHTML = shiva.navi[0];
document.getElementById('nav2').innerHTML = shiva.navi[1];
document.getElementById('nav3').innerHTML = shiva.navi[2];
document.getElementById('nav4').innerHTML = shiva.navi[3];
document.getElementById('nav5').innerHTML = shiva.navi[4];

//All images
document.getElementById('homepic').src = shiva.images.homepic;
document.getElementById('aboutpic').src = shiva.images.aboutpic;
document.getElementById('skillPic1').src = shiva.images.skillPic1;
document.getElementById('skillPic2').src = shiva.images.skillPic2;
document.getElementById('skillPic3').src = shiva.images.skillPic3;
document.getElementById('skillPic4').src = shiva.images.skillPic4;
document.getElementById('skillPic5').src = shiva.images.skillPic5;
document.getElementById('projectPic1').src = shiva.images.projectPic1;
document.getElementById('projectPic2').src = shiva.images.projectPic2;




//about
document.getElementById('abouth1').innerHTML = shiva.navi[1];
//skill
document.getElementById('skill').innerHTML = shiva.navi[2];
//projects
document.getElementById('projecth1').innerHTML = shiva.navi[3];


//for-desc
document.getElementById('about1').innerHTML = shiva.a[0].desc;
document.getElementById('ds').innerHTML = shiva.a[1].desc;

document.getElementById('homeh1').innerHTML = "I'm <span>ShivaGuru</span><br>Associate Full Stack Software Developer";

//for skills
document.getElementById('skills1').innerHTML = shiva.sk[0];
document.getElementById('skills2').innerHTML = shiva.sk[1];
document.getElementById('skills3').innerHTML = shiva.sk[2];
document.getElementById('skills4').innerHTML = shiva.sk[3];
document.getElementById('skills5').innerHTML = shiva.sk[4];



//projects
document.getElementById('project-title1').innerHTML = shiva.projects[0][0];
document.getElementById('project-title2').innerHTML = shiva.projects[0][1];


document.getElementById('project-c1').innerHTML = shiva.projects[1][0];
document.getElementById('project-c2').innerHTML = shiva.projects[1][1];

//contact
document.getElementById('contact1').innerHTML = shiva.contact[0];
document.getElementById('contact2').innerHTML = shiva.contact[1];
document.getElementById('contact3').innerHTML = shiva.contact[2];
document.getElementById('contact4').innerHTML = shiva.contact[3];
document.getElementById('contact5').innerHTML = shiva.contact[4];

//footer
document.getElementById('fp1').innerHTML = shiva.footer[0];
document.getElementById('fp2').innerHTML = shiva.footer[1];
document.getElementById('fp3').innerHTML = shiva.footer[2];
  });