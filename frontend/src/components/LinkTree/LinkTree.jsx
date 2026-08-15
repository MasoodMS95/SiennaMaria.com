import './LinkTree.css'

export default function LinkTree(){
    const discordURL = 'https://discord.com/invite/a96kcFBukY'
    const youtubeURL = 'https://www.youtube.com/@siennamaria?sub_confirmation=1';
    const twitchURL = 'https://www.twitch.tv/siennamaria';
    const instagramURL = 'https://www.instagram.com/siennamariia/';
    const twitterURL = 'https://x.com/siennamariia';
    const tiktokURL = 'https://www.tiktok.com/@sisisdiaries';


    const handleNavigate = (url) => {
        window.open(url, '_blank');
    };

    return(
        <ul className='link-tree standard-font'>
            <li className='socials-redirects' id='discord-link' onClick={() => handleNavigate(discordURL)}>
                <div className='socials-link'>
                    <i className="fa-brands fa-discord discord-text"></i>
                    <span className='discord-text'>Discord</span>
                </div>
            </li>
            <li className='socials-redirects' id='youtube-link' onClick={() => handleNavigate(youtubeURL)}>
                <div className='socials-link'>
                    <i className="fa-brands fa-youtube"></i>
                    <span><span id="youtube-you">You</span><span id="youtube-tube">Tube</span></span>
                </div>
            </li>
            <li className='socials-redirects' id='twitch-link' onClick={() => handleNavigate(twitchURL)}>
                <div className='socials-link'>
                    <i className="fa-brands fa-twitch twitch-text"></i>
                    <span className='twitch-text'>Twitch</span>
                </div>
            </li>
            <li className='socials-redirects' id='instagram-link' onClick={() => handleNavigate(instagramURL)}>
                <div className='socials-link'>
                    <i className="fa-brands fa-instagram instagram-color"></i>
                    <span className='instagram-color'>Instagram</span>
                </div>
            </li>
            <li className='socials-redirects' id='twitter-link' onClick={() => handleNavigate(twitterURL)}>
                <div className='socials-link'>
                    <i className="fa-brands fa-x-twitter"></i>
                    <span>(fka. twitter)</span>
                </div>
            </li>
            <li className='socials-redirects' id='tiktok-link' onClick={() => handleNavigate(tiktokURL)}>
                <div className='socials-link'>
                    <i className="fa-brands fa-tiktok tiktok-text"></i>
                    <span className='tiktok-text'>TikTok</span>
                </div>
            </li>
        </ul>
    );
}