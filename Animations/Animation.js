
 var isAudioPlaying = false; // user has not clicked

function myfunction()
{
 if(isAudioPlaying === false) // user has clcked
    {
    document.getElementById("myAudio").play();
    document.getElementById("myAudio1").play();
    document.getElementById("myAudio2").play();
    document.getElementById("yes").style.visibility ="visible";
    document.getElementById("no").style.visibility ="hidden";
    isAudioPlaying = true;
    }

 else
    {
        document.getElementById("myAudio").pause();
        document.getElementById("myAudio1").pause();
        document.getElementById("myAudio2").pause();
        document.getElementById("no").style.visibility="visible";
        document.getElementById("yes").style.visibility ="hidden";
        isAudioPlaying = false;
        }

   
   }