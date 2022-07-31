import PathCard from '../PathCard.js'

import forgeInvitationImage from '../general/forge-invitation.png'

export default function adeptTier()
{
    const adeptTier = {}

    const blackSash = new PathCard(forgeInvitationImage, 'Black Sash', 'Adept Chamber')
    const blackMind1= new PathCard(forgeInvitationImage, '?', '');
    const blackMind2 = new PathCard(forgeInvitationImage, '?', '');
    const blackMind3 = new PathCard(forgeInvitationImage, '?', '');
    const blackMind4 = new PathCard(forgeInvitationImage, '?', '');
    const blackMind5 = new PathCard(forgeInvitationImage, '?', '');
    const blackTech1 = new PathCard(forgeInvitationImage, '?', '');
    const blackTech2 = new PathCard(forgeInvitationImage, '?', '');
    const blackTech3 = new PathCard(forgeInvitationImage, '?', '')
    const blackTrainingManual = new PathCard(forgeInvitationImage, '?', '');
    const blackAdvancement = new PathCard(forgeInvitationImage, 'Advancement', 'Adept Tier or higher')

    adeptTier.black = [
        blackSash, blackMind1, blackMind2, blackMind3, blackMind4, blackMind5, blackTech1, blackTech2, blackTech3, blackTrainingManual, blackAdvancement
    ]

    return adeptTier;
}