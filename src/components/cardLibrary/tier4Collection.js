import PathCard from './PathCard.js'

import forgeInvitationImage from './tier0-general/forge-invitation.png'

export default function adeptTier()
{
    const t4 = {}

    t4.blackSash = new PathCard({}, forgeInvitationImage, 'Black Sash', 'Adept Chamber')
    t4.blackMind1= new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackMind2 = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackMind3 = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackMind4 = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackMind5 = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackTech1 = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackTech2 = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackTech3 = new PathCard({}, forgeInvitationImage, '?', '')
    t4.blackTrainingManual = new PathCard({}, forgeInvitationImage, '?', '');
    t4.blackAdvancement = new PathCard({}, forgeInvitationImage, 'Advancement', 'Adept Tier or higher')

    t4.black = [
        t4.blackSash, t4.blackMind1, t4.blackMind2, t4.blackMind3, t4.blackMind4, t4.blackMind5, t4.blackTech1, t4.blackTech2, t4.blackTech3, t4.blackTrainingManual, t4.blackAdvancement
    ]

    return t4;
}