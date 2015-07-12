<?php
include('db_connect.php');

switch($_GET['action'])  {

    case 'get_craft' :
            get_craft();
            break;
    case 'get_admin_gifts' :
            get_admin_gifts();
            break;     
}

function get_craft() {
    $data = mysql_query('SELECT content.content_id, content.desc, content.image, website.website_id, website.desc, website.image, website.website_title
        FROM content INNER JOIN look_up ON content.content_id=look_up.content_id INNER JOIN website ON look_up.website_id=website.website_id');

        while($geteach=mysql_fetch_array($data)) {
                $content_id = $geteach[0];
                $content_desc = $geteach[1];
                $content_image = $geteach[2];
                $website_id = $geteach[3];
                $website_desc = $geteach[4];
                $website_image = $geteach[5];
                $website_title = $geteach[6];
            
            $craftArray[] = array('content_id'=> $content_id, 'content_desc'=> $content_desc, 'content_image'=> $content_image, 'website_desc'=> $website_desc, 
                'website_id'=> $website_id, 'website_image'=> $website_image, 'website_title'=> $website_title);

        }
        $craft_json = json_encode($craftArray);
        
        echo html_entity_decode($craft_json);
}
mysqli_close($con);
?>
