import {NullValue} from "rollup";
import {formatDistanceToNow} from "date-fns";
async function handleJoke() {
  const params:URLSearchParams = new URLSearchParams();
  params.append("email", "h.aldaghstany@innopolis.university");
  const data = await (await (fetch("https://fwd.innopolis.app/api/hw2?" + params.toString()))).json();



  // par.innerText = data;


  // console.log(data);
  return data
}
async function idhandler() {
  const params = new URLSearchParams();
  const firstFetch=handleJoke()
  params.append("id", await firstFetch);
  const data = await (await (fetch("https://fwd.innopolis.university/api/comic?" + params.toString()))).json();
  return data;}


  const data = await idhandler();
  const titlepar = document.getElementById("titlepar");

  const datepar  = document.getElementById("datepar");
  const image:HTMLImageElement = document.getElementById("jokeimage")as HTMLImageElement;
  console.log(data);
  console.log(data.title);
   const dat = formatDistanceToNow(new Date(data.year.toString(),data.month.toString() ,  data.day.toString() ));
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
