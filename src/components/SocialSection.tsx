import { InstagramLogo } from "./InstagramLogo";
import { LinkedInLogo } from "./LinkedinLogo";
import { SocialButton } from "./SocialButton";
import { TikTokLogo } from "./TikTokLogo";

export function SocialSection() {
    return (
        <div className="social-links">
            <SocialButton url="https://www.instagram.com/mateusbmorais/" title="Instagram">
                <InstagramLogo />
            </SocialButton>
            <SocialButton url="https://tiktok.com/@debugandoavida/" title="TikTok">
                <TikTokLogo />
            </SocialButton>
            <SocialButton url="https://www.linkedin.com/in/mateusbmorais/" title="LinkedIn">
                <LinkedInLogo />
            </SocialButton>
        </div>
    )
}