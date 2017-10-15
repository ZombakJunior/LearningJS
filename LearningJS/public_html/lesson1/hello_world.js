function hello()
{
    document.getElementById("sample_topic").innerHTML = 'Hello world';
    document.getElementById("sample_text").innerHTML = '<iframe \n\
                                                            width="420" \n\
                                                            height="315" \n\
                                                            src="https://www.youtube.com/embed/OfaBZvvL_7M">\n\
                                                        </iframe>';
    document.getElementById('sample_button').style.visibility = 'hidden';
}