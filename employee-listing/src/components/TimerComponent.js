export default function TimerComponent() {
    var time = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    return <div><h1>Current Time is: {time}</h1></div>
}