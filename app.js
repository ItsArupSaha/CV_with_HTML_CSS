const link = encodeURI('https://cvofarupsaha.netlify.app/');
const msg = encodeURIComponent("Hi, everyone");
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const whatsapp = document.querySelector('.wa-btn');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}:${link}`;

const fb = document.querySelector('.fb-btn');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter-btn');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const linkedIn = document.querySelector('.ln-btn');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;