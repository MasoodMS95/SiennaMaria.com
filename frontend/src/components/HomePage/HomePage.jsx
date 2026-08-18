import React from 'react'
import { useNavigate } from 'react-router-dom';
import LatestVideoPlayer from './LatestVideoOnYoutube/LatestVideoPlayer'
import './HomePage.css'

export default function HomePage() {
    let navigate = useNavigate();
    return (
        <div className='hompage-box'>
            <div className='latest-video-box'>
                <h2 className='home-title standard-font'>Latest Video</h2>
                <LatestVideoPlayer />
            </div>
            <div className='about-me-box'>
                <h2 className='about-me-header standard-font'>About Me</h2>
                <div className='about-me-content-box'>
                    <p className='about-me-content'>
                        Hi! My name is Sienna Maria and I have been making content on YouTube for 6 years now (July 31st 2020) whilst streaming on Twitch for 5 (March 2021).  I primarily focus on gaming playthroughs but these past couple of years I have been embracing my feminine side and have started to make fashion and beauty content on my third channel! My second channel is for VODs heh.
                        I am an Aquarius, born 13th of February 2005 (one day before Lara Croft, coincidence? I think not) and I have three cats. Aurora is my oldest, 17/05/2020, Dionysus second, 28/05/2022 and Bacchus the youngest, 06/09/2024. Of course, I must mention the oldest who isn’t with us anymore, Jion who was 4 years old when he passed in 2022.
                        In 2023, I was diagnosed with Seronegative Arthritis:
                    </p>
                    <blockquote className='about-me-quote'>
                        "...a group of inflammatory joint diseases where patients experience joint pain, swelling, and stiffness, but routine blood tests return negative for markers like rheumatoid factor (RF) and anti-CCP antibodies."
                    </blockquote>
                    <p className='about-me-content'>
                        It took me a few years to get diagnosed with it, having had my first symptoms appear when I turned 16, primarily due to the fact that the diagnosis can only be validated based on clinical symptoms, exams and imaging rather than markers in blood tests. This is why, however, I mainly stick to using KBM as controllers really put a strain on my hands and joints, causing pain and swelling. So it might not seem the smartest move, especially when playing old games like GTA 4 and Bully, but at least it’s for a reason.
                        I have been homeschooled since 2019; in 2024 I decided to go to university and get a degree which I am currently in my third year of studying! I am working towards a Bachelor (Hons) in Arts and Humanities with specialisms in Creative Writing and History as well as taking an online Harvard course on the side in Early Child Development.
                    </p>
                    <p className='about-me-content'>
                        As you can tell from the dates above, I started creating content a few months after the world fell into lockdown. Unlike many, many others, the pandemic didn’t affect me per se, but 2020 was the year that led me to where I am now.
                        I always wanted to make content on YouTube; when I was younger, I would make vlogs throughout the day and spend my evenings editing them in bed, under the covers, staying up until 4/5am when I had to be up by 7am to get ready for school. I remember one vlog in particular where I had gone to ASDA, a UK shop, and was doing cartwheels down one of the isles all the way at the end of the store. A few minutes later, one of the employees came and kicked us out because I wasn’t allowed to do so. I titled the vlog ‘I got KICKED OUT of ASDA?!?!’.
                    </p>
                    <p className='about-me-content'>
                        There were many other vlogs too that I believe I uploaded to my main channel but I, unfortunately, erased them all when I started from scratch with my gaming content. I regret it now. I would have loved to watch them back and laugh.
                        Gaming is something I have always loved, but because neither of my parents ever liked games, nor my sister, I got into the scene quite late compared to others. My first console was the ‘Nintendo DSI’ before I got the ‘Wii’ when it first came out. After that, I stopped playing games until around 2017 which is when I got sucked into ‘The Sims 4’. In November of 2019 I got a PS4 to play ‘Call of Duty Modern Warfare 2019’ and ‘Detroit Become Human’. I finished DBH within a day or so, and I was so bad at COD that I gave up. I tried Uncharted as well, but alas, the same outcome occurred.
                    </p>
                    <p className='about-me-content'>
                        It wasn’t until I watched my favourite YouTuber play through ‘The Last of Us Part 2’ that I had the itch to get back into gaming again. Now, I had never watched nor played the first one; there was one time I was deciding between getting it or dying light. I chose that latter, but only played for a few hours before I got too scared and quit… anyways.
                        I grew to love some characters I had never met before, whose journey I never experienced but whose end I loved. Then I played through the first one myself, and then the second, and then I kept finding games where I became so hooked to the stories, I would cry when they lose and smile when they win.
                        That’s why I game, to experience all these different stories, to live so many different lives, to step into the shoes of someone else, have that be an hour or years.
                    </p>
                    <p className='about-me-content'>
                        Don’t get me wrong, I love a good challenge in games now too, hell I play on the hardest difficulties and still do well; it’s this attitude which has helped me succeed in other areas of my life too. To keep trying. To go again, and again, and again. Keep doing it until you get it, because there’s no other way to learn.
                    </p>
                </div>
            </div>
            <h2 className='standard-font'>Follow me on my <span onClick={() => navigate('/socials')} className='redirect'>Socials!</span></h2>
        </div>
    )
}