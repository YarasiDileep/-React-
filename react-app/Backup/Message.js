function Message(){
    let Name = "Dileep"
    let Company = "Infosys"
    let Company_Image ='https://media.istockphoto.com/id/476244340/photo/mnc-acronym-word-speech-bubble-illustration.jpg?s=612x612&w=0&k=20&c=9-OTlNdQ0rM-k43fioanjKbabJNJaorPCO-sWucFEKM='
    return <div>
        <h1>P_Name:{Name}</h1>
        <h1>P_Company:{Company}</h1>
        <img src={Company_Image} alt="" srcset="" />
    </div>
}
export default Message