function display_menu()
{
    document.getElementById('menu_expand_list').style.display='block';
}
function hide_menu()
{
    document.getElementById('menu_expand_list').style.display='none';
}
function click_to_display()
{
    let element=document.getElementById('menu_expand_list');
    if(element.style.display=='none')
        display_menu();
    else hide_menu();
}