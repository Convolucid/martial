import Technique from './Technique.js'

export default function techniqueLibrary()
{
    const tech = {}

    // Defensive and Controlling Hands
    tech.hand1 = new Technique('Tiu Sau', 'Ward Away, Up & Out', 'Hand', '挑手')
    tech.hand2 = new Technique('Pok Sáu', 'Ward Away, In & Down', 'Hand', '撲手')
    tech.hand3 = new Technique('Fùng Sáu', 'Sealing Hand', 'Hand', '封手')
    tech.hand4 = new Technique('Gwa Sáu', 'Hanging Hand', 'Hand', '掛手')
    tech.hand5 = new Technique('Lau Sau', 'Grasping Hand', 'Hand', '摟手')
    tech.hand6 = new Technique('Dìu Sáu', 'Straight Hook', 'Hand', '刁手')
    tech.hand7 = new Technique('Got Sáu', 'Cutting Hook', 'Hand', '割手')
    tech.hand8 = new Technique('Àu Láu Chói Sáu', 'To Hook, Grasp, and Pluck', 'Hand', '抅摟採手')
    tech.hand9 = new Technique('Yán Jam Sáu', 'To Stretch Across', 'Hand', '引針手')

    // Closed Fist Strikes
    tech.fist1 = new Technique('Tóng Chèui', 'Straight Punch', 'Fist', '捅捶')
    tech.fist2 = new Technique('Tīu Tóng Chèui', 'Warding Straight Punch', 'Fist', '挑捅捶')
    tech.fist3 = new Technique('Jyun Chèui', 'Drilling Fist', 'Fist', '鑽捶')
    tech.fist4 = new Technique('Tau Sam Chèui', 'Heart Stealing Fist', 'Fist', '偷心捶')
    tech.fist5 = new Technique('Bāng Chèui', 'Crashing Fist', 'Fist', '崩捶')
    tech.fist6 = new Technique('Sai Chèui', 'Powerful Forcing Fist', 'Fist', '勢捶')
    tech.fist7 = new Technique('Gwa Tóng Chèui', 'Hanging Straight Punch', 'Fist', '掛捅捶')
    tech.fist8 = new Technique('Pek Chèui', 'Chopping Fist', 'Fist', '劈捶')
    tech.fist9 = new Technique('Cho Chèui', 'Filing Fist', 'Fist', '挫捶')
    tech.fist10 = new Technique('Bóu Chèui', 'Supplemental Punch', 'Fist', '補捶')
    tech.fist11 = new Technique('Fàan Che Chèui', 'Wheel Fist (Turn the Cart Over)', 'Fist', '翻車捶')
    tech.fist12 = new Technique('Hyūn Chèui', 'Round Fist', 'Fist', '圈捶')

    // Palm Strikes
    tech.palm1 = new Technique('Fung Jéung', 'Halting Palm', 'Palm', '封掌')
    tech.palm2 = new Technique('Tìu Jéung', 'Warding Palm', 'Palm', '挑掌')
    tech.palm3 = new Technique('Jáam Yīu Jéung', 'Waist Chopping Palm', 'Palm', '斬腰掌')

    // Stances and Footwork
    tech.step1 = new Technique('Má Bou', 'Horse Stance', 'Stance', '馬步')
    tech.step2 = new Technique('Dang Saan Bou', 'Hill Climbing Stance', 'Stance', '登山步')
    tech.step3 = new Technique('Chat Sing Bou', 'Seven Star Stance', 'Stance', '七星步')
    tech.step4 = new Technique('Jeun Bou', 'Advancing Shuffle', 'Footwork', '進步')
    tech.step5 = new Technique('Chit Bou', 'Retreating Shuffle', 'Footwork', '撤步')
    tech.step6 = new Technique('Kwa Fú Bou', 'Tiger Riding Stance', 'Stance', '跨虎步')
    tech.step7 = new Technique('Tān Daap Bou', 'Collapsing Stance', 'Stance', '吞蹋步')
    tech.step8 = new Technique('Dip Bou', 'Burst Step', 'Footwork', '疊步')
    tech.step9 = new Technique('Yùn Hàu Jung Tiu', 'Monkey Hop', 'Footwork', '猿猴蹤跳')
    tech.step10 = new Technique('Yap Wàan Bou', 'Circle Entering Stance', 'Stance', '入環步')

    // Kicks
    tech.kick1 = new Technique('Sap Ji Téui', 'Cross Kick', 'Kick', '十字腿')
    tech.kick2 = new Technique('Jaat Téui', 'Leg Piercing Kick', 'Kick', '扎腿')
    tech.kick3 = new Technique('Bai Mùn Téui', 'Door Shutting Kick', 'Kick', '閉門腿')

    // Complex Movements (Throw, Combination)
    tech.comp1 = new Technique('Baak Yùn Chíng Haak', 'White Ape Invites the Guest', 'Throw', '白猿請客')
    tech.comp2 = new Technique('Tòng Lòng Bou Sìm', 'Mantis Catches the Cicada', 'Control', '螳螂捕蟬')

    return tech;
}