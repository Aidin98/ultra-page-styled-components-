import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button } from '../../GlobalStyles'
import {FooterContainer,FooterSubscription,FooterSubHeading,FotterSubText,Form,FormInput,FotterLink,
    FotterLinksItems,FotterLinksContainer,FotterLinkTitle,FotterLinksWrapper,SocialIcon,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './Fotter.elements'
function Fotter() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest new and trends
                </FooterSubHeading>
                <FotterSubText>
                    You can subscribe at any time!
                </FotterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your email'/>
                        <Button fontBig >Subscribe</Button>
                 
                </Form>
            </FooterSubscription>
            <FotterLinksContainer>
                <FotterLinksWrapper>
                    <FotterLinksItems>
                        <FotterLinkTitle>About Us</FotterLinkTitle>
                        <FotterLink to='/sign-up'>Testimponials</FotterLink>
                        <FotterLink to='/sign-up'>Creers</FotterLink>
                        <FotterLink to='/sign-up'>HInvestor</FotterLink>
                        <FotterLink to='/sign-up'>Terms of service</FotterLink>
                    </FotterLinksItems>
                    <FotterLinksItems>
                        <FotterLinkTitle>Contact Us</FotterLinkTitle>
                        <FotterLink to='/sign-up'>Testimponials</FotterLink>
                        <FotterLink to='/sign-up'>Creers</FotterLink>
                        <FotterLink to='/sign-up'>HInvestor</FotterLink>
                        <FotterLink to='/sign-up'>Terms of service</FotterLink>
                    </FotterLinksItems>
                    <FotterLinksItems>
                        <FotterLinkTitle>Videos</FotterLinkTitle>
                        <FotterLink to='/sign-up'>Testimponials</FotterLink>
                        <FotterLink to='/sign-up'>Creers</FotterLink>
                        <FotterLink to='/sign-up'>HInvestor</FotterLink>
                        <FotterLink to='/sign-up'>Terms of service</FotterLink>
                    </FotterLinksItems>
                    <FotterLinksItems>
                        <FotterLinkTitle>Social Media</FotterLinkTitle>
                        <FotterLink to='/sign-up'>Testimponials</FotterLink>
                        <FotterLink to='/sign-up'>Creers</FotterLink>
                        <FotterLink to='/sign-up'>HInvestor</FotterLink>
                        <FotterLink to='/sign-up'>Terms of service</FotterLink>
                    </FotterLinksItems>
                </FotterLinksWrapper>
            </FotterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA Ⓒ 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube /></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Fotter
