<?php
$arr=$_FILES["file"];
if($_FILES["file"]["error"]>0)
{
    echo "Error:".$_FILES["file"]["error"]."<br/>";
}
else{
    $dest='upload/'.$_FILES["file"]["name"];
    if(move_uploaded_file($arr['tmp_name'],$dest)){
        echo "upload success!"."<br/>";
        echo "Upload:".$_FILES["file"]["name"]."<br/>";
        echo "Type:".$_FILES["file"]["type"]."<br/>";
        echo "Size:".($_FILES["file"]["size"]/1024)."Kb<br/>";
    }
}
?>