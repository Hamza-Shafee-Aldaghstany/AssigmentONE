import {NullValue} from "rollup";
import {formatDistanceToNow} from "date-fns";
interface Joke {
  img: string;
  alt: string;
  year: string;
  month: string;
  safe_title: string;
  day: string;
}
async function handleJoke() : Promise<string> {
  const params:URLSearchParams = new URLSearchParams();
  params.append("email", "h.aldaghstany@innopolis.university");
  const data :string= await (await (fetch("https://fwd.innopolis.app/api/hw2?" + params.toString()))).json();




  // par.innerText = data;


  // console.log(data);
  return data;
}
async function idhandler():Promise<Joke> {
  const params:URLSearchParams = new URLSearchParams();
  const firstFetch:Promise<string>=handleJoke()
  params.append("id", await firstFetch);
  const data :Joke= await (await (fetch("https://fwd.innopolis.university/api/comic?" + params.toString()))).json();
  return data;}


  const data  :Joke = await idhandler();
  const titlepar :HTMLDivElement = document.getElementById("titlepar") as HTMLDivElement;

  const datepar:HTMLDivElement  = document.getElementById("datepar")as HTMLDivElement;
  const image:HTMLImageElement = document.getElementById("jokeimage")as HTMLImageElement;
  console.log(data);
  console.log(data.safe_title);
   const dat = formatDistanceToNow(new Date( data.month.toString() +
     "/" +
     data.day.toString() +
     "/" +
     data.year.toString()))+"||"+new Date( data.month.toString() +
     "/" +
     data.day.toString() +
     "/" +
     data.year.toString()).toLocaleDateString();
   console.log(dat);
  if(datepar !==null){
     datepar.innerText = "Date: " + dat;
  }
  if (titlepar !== null) {
    titlepar.innerText = "Title: " + data.safe_title;
  }

  if (image !== null) {
    image.src = data.img;
  }




// export default noi();
// console.log(data);
