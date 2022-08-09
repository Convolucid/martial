import Technique from './Technique.js'

export default function techniqueLibrary()
{
    const tech = {}

    // Defensive and Controlling Hands
    tech.hand1 = new Technique({}, 'Tiu Sau', 'Ward Away, Up & Out', 'Hand', '挑手')
    tech.hand2 = new Technique({}, 'Pok Sáu', 'Ward Away, In & Down', 'Hand', '撲手')
    tech.hand3 = new Technique({}, 'Fùng Sáu', 'Sealing Hand', 'Hand', '封手')
    tech.hand4 = new Technique({}, 'Gwa Sáu', 'Hanging Hand', 'Hand', '掛手')
    tech.hand5 = new Technique({}, 'Lau Sau', 'Grasping Hand', 'Hand', '摟手')
    tech.hand6 = new Technique({}, 'Dìu Sáu', 'Straight Hook', 'Hand', '刁手')
    tech.hand7 = new Technique({}, 'Got Sáu', 'Cutting Hook', 'Hand', '割手')
    tech.hand8 = new Technique({}, 'Àu Láu Chói Sáu', 'To Hook, Grasp, and Pluck', 'Hand', '抅摟採手')
    tech.hand9 = new Technique({}, 'Yán Jam Sáu', 'To Stretch Across', 'Hand', '引針手')
    tech.hand10 = new Technique({}, 'Tyut', 'To Cast Off', 'Hand', '脫')
    tech.hand11 = new Technique({}, 'Bóng', 'To Topple', 'Hand', '榜')

    tech.handTechs = [tech.hand1, tech.hand2, tech.hand3, tech.hand4, tech.hand5, tech.hand6, tech.hand7, tech.hand8, tech.hand9, tech.hand10, tech.hand11]

    // Closed Fist Strikes
    tech.fist1 = new Technique({}, 'Tóng Chèui', 'Straight Punch', 'Fist', '捅捶')
    tech.fist2 = new Technique({}, 'Tīu Tóng Chèui', 'Warding Straight Punch', 'Fist', '挑捅捶')
    tech.fist3 = new Technique({}, 'Jyun Chèui', 'Drilling Fist', 'Fist', '鑽捶')
    tech.fist4 = new Technique({}, 'Tau Sam Chèui', 'Heart Stealing Fist', 'Fist', '偷心捶')
    tech.fist5 = new Technique({}, 'Bāng Chèui', 'Crashing Fist', 'Fist', '崩捶')
    tech.fist6 = new Technique({}, 'Sai Chèui', 'Powerful Forcing Fist', 'Fist', '勢捶')
    tech.fist7 = new Technique({}, 'Gwa Tóng Chèui', 'Hanging Straight Punch', 'Fist', '掛捅捶')
    tech.fist8 = new Technique({}, 'Pek Chèui', 'Chopping Fist', 'Fist', '劈捶')
    tech.fist9 = new Technique({}, 'Cho Chèui', 'Filing Fist', 'Fist', '挫捶')
    tech.fist10 = new Technique({}, 'Bóu Chèui', 'Supplemental Punch', 'Fist', '補捶')
    tech.fist11 = new Technique({}, 'Fàan Che Chèui', 'Wheel Fist (Turn the Cart Over)', 'Fist', '翻車捶')
    tech.fist12 = new Technique({}, 'Hyūn Chèui', 'Round Fist', 'Fist', '圈捶')
    tech.fist13 = new Technique({}, 'Sai Jaat Chèui', 'Side Hammer Fist', 'Fist', '勢扎捶')

    // Palm Strikes
    tech.palm1 = new Technique({}, 'Fung Jéung', 'Halting Palm', 'Palm', '封掌')
    tech.palm2 = new Technique({}, 'Tìu Jéung', 'Warding Palm', 'Palm', '挑掌')
    tech.palm3 = new Technique({}, 'Jáam Yīu Jéung', 'Waist Chopping Palm', 'Palm', '斬腰掌')

    // Stances and Footwork
    tech.step1 = new Technique({}, 'Má Bou', 'Horse Stance', 'Stance', '馬步')
    tech.step2 = new Technique({}, 'Dang Saan Bou', 'Hill Climbing Stance', 'Stance', '登山步')
    tech.step3 = new Technique({}, 'Chat Sing Bou', 'Seven Star Stance', 'Stance', '七星步')
    tech.step4 = new Technique({}, 'Jeun Bou', 'Advancing Shuffle', 'Footwork', '進步')
    tech.step5 = new Technique({}, 'Chit Bou', 'Retreating Shuffle', 'Footwork', '撤步')
    tech.step6 = new Technique({}, 'Kwa Fú Bou', 'Tiger Riding Stance', 'Stance', '跨虎步')
    tech.step7 = new Technique({}, 'Tān Daap Bou', 'Collapsing Stance', 'Stance', '吞蹋步')
    tech.step8 = new Technique({}, 'Dip Bou', 'Burst Step', 'Footwork', '疊步')
    tech.step9 = new Technique({}, 'Yùn Hàu Jung Tiu', 'Monkey Hop', 'Footwork', '猿猴蹤跳')
    tech.step10 = new Technique({}, 'Yap Wàan Bou', 'Circle Entering Stance', 'Stance', '入環步')
    tech.step11 = new Technique({}, 'Tàan Téui', 'Seeking Leg', 'Footwork', '彈腿')
    tech.step12 = new Technique({}, 'Yùn Hàu Bou', 'Monkey Stance', 'Stance', '猿猴步')
    tech.step13 = new Technique({}, 'Sè Yán Jūng Chóu', 'Snake in the Grass', 'Stance', '蛇隱中草')
    tech.step14 = new Technique({}, 'Náu Má Bou', 'Twisted Horse Stance', 'Stance', '扭馬步')
    tech.step15 = new Technique({}, 'Tāu Bou', 'Stealing Step', 'Stance', '偷步')
    tech.step16 = new Technique({}, 'Sím Bou', 'Dodge Step', 'Footwork', '閃步')
    tech.step17 = new Technique({}, 'Jáu Bou', 'Walking Step', 'Footwork', '走步')
    tech.step18 = new Technique({}, 'Jūng Tiu Daai Jyún Sān', '360 Hop', 'Footwork', '蹤跳大轉身')
    tech.step19 = new Technique({}, 'Tòng Lòng Jūng Tiu', 'Mantis Hop', 'Stance', '螳螂蹤跳')
    tech.step20 = new Technique({}, 'Jeun Yùn Hàu Jung Tiu', 'Advancing Monkey Hop', 'Stance', '進猿猴蹤跳')
    tech.step21 = new Technique({}, 'Chit Yùn Hàu Jung Tiu', 'Retreating Monkey Hop', 'Stance', '撤猿猴蹤跳')

    // Kicks and Sweeps
    tech.kick1 = new Technique({}, 'Sap Ji Téui', 'Cross Kick', 'Kick', '十字腿')
    tech.kick2 = new Technique({}, 'Liu Yam Téui', 'Groin Lift Kick', 'Kick', '撩陰腿')
    tech.kick3 = new Technique({}, 'Jaat Téui', 'Leg Piercing Kick', 'Kick', '扎腿')
    tech.kick4 = new Technique({}, 'Bai Mùn Téui', 'Door Shutting Kick', 'Kick', '閉門腿')
    tech.kick5 = new Technique({}, 'Syùn Fūng Téui', 'Whirlwind Kick', 'Kick', '旋風腿')
    tech.kick6 = new Technique({}, 'Chìn Hau Sou Tòng Téui', 'Iron Broom', 'Sweep', '前後掃蹚腿')
    tech.kick7 = new Technique({}, 'Jāk Cháai Téui', 'Side Kick', 'Kick', '側踹腿')
    tech.kick8 = new Technique({}, 'Chyun Sam Téui', 'Heart Piercing Kick', 'Kick', '穿心腿')

    // Complex Movements (Throw, Combination)
    tech.comp1 = new Technique({}, 'Baak Yùn Chíng Haak', 'White Ape Invites the Guest', 'Throw', '白猿請客')
    tech.comp2 = new Technique({}, 'Tòng Lòng Bou Sìm', 'Mantis Catches the Cicada', 'Control', '螳螂捕蟬')
    tech.comp3 = new Technique({}, 'Ngo Fú Pok Sik', 'Hungry Tiger Seeks Its Prey', 'Control', '餓虎撲食')
    tech.comp4 = new Technique({}, 'Tòng Lòng Bou Syùn', 'Mantis Whirlwind Step', 'Combination', '螳螂步旋')

    // Gung Lik Kyun
    tech.glk1 = new Technique({}, 'Ba Wòng Géui Díng', 'Tyrant Lifts The Cauldron', 'Gung Lik Kyun', '霸王举鼎')
    tech.glk2 = new Technique({}, 'Seun Sáu Tàu Jéng', 'Effortlessly Cast Into The Well', 'Gung Lik Kyun', '顺手投井')
    tech.glk3 = new Technique({}, 'Wū Lùng Taam Hói', 'Black Dragon Explores The Ocean', 'Gung Lik Kyun', '乌龙探海')
    tech.glk4 = new Technique({}, 'Yé Má Fan Jūng', "Part the Wild Horse's Mane", 'Gung Lik Kyun', '野马分鬃')
    tech.glk5 = new Technique({}, 'Seun Fung Sou Hip', 'Obey the Wind, Clear in Harmony', 'Gung Lik Kyun', '顺风扫叶')
    tech.glk6 = new Technique({}, 'Yiu Jí Jyun Tīn', 'Sparrow Hawk Soars Into The Sky', 'Gung Lik Kyun', '鹞子钻天')
    tech.glk7 = new Technique({}, 'Nàja Gáau Hói', 'Nezha Stirs The Sea', 'Gung Lik Kyun', '哪吒搅海')
    tech.glk8 = new Technique({}, 'Saam Wàan Tou Yut', 'Three Rings Envelop The Moon', 'Gung Lik Kyun', '三环套月')
    tech.glk9 = new Technique({}, 'Yi Lòng Daam Sāan', 'Erlangshen Carries The Mountain', 'Gung Lik Kyun', '二郎担山')
    tech.glk10 = new Technique({}, 'Baak Yùn Hin Gwó', 'White Ape Offers The Fruit', 'Gung Lik Kyun', '白猿献果')
    tech.glk11 = new Technique({}, 'Chēng Lùng Chēut Hói', 'Azure Dragon Goes Out To Sea', 'Gung Lik Kyun', '青龙出海')

    // Iron Phoenix
    tech.ipma1 = new Technique({}, 
        'Tit Fung Pāan Dāng',
        'Iron Phoenix Forges Ahead (封掌十字腿劈捶 - Fūng Jéung, Sap Ji Téui, Pek Chèui)', 'Iron Phoenix', '鐵鳳攀登'
    )
    tech.ipma2 = new Technique({}, 
        'Tit Fung Pīk Dei',
        'Iron Phoenix Opens the Earth (揪腿反掌蹬扑腿 - Jāu Téui, Fáan Jéung, Dang Pok Téui)', 'Iron Phoenix', '鐵鳳辟地'
    )
    tech.ipma3 = new Technique({}, 
        'Hàak Fú Gàau Chà',
        'Black Tiger Crossing (雙刁取眠鎖喉 - Sēung Dìu, Chéui Mìn, Só Hàu)', 'Iron Phoenix', '黑虎交叉'
    )
    tech.ipma4 = new Technique({}, 
        'Pēi Gīng Jáam Gīk',
        'Cutting Through Thorns and Thistles (劈崩圈捶 - Pek, Bàng, Hyùn Chèui)', 'Iron Phoenix', '披荊斬棘'
    )

    // Long Pole
    tech.pole1 = new Technique({}, 'Wàang Sóu Chīn Gwān', 'Sweep Away a Thousand Troops', 'Long Pole', '橫掃千軍')
    tech.pole2 = new Technique({}, 'But Séui Chàm Yù', 'Stroke the Water to Seek the Fish', 'Long Pole', '撥水尋魚')
    tech.pole3 = new Technique({}, 'Taai Sāan Aat Déng', 'Mount Tai Crushes the Head', 'Long Pole', '泰山壓頂')
    tech.pole4 = new Technique({}, 'Yap Gaap Chēung Gwan', 'Pressing Spear Staff', 'Long Pole', '入夾槍棍')
    tech.pole5 = new Technique({}, 'Chēng Lùng Tóu Sit', 'Azure Dragon Flicks its Tongue', 'Long Pole', '青龍吐舌')
    tech.pole6 = new Technique({}, 'Chēng Lùng Pok Sik', 'Azure Dragon Pounces its Prey', 'Long Pole', '青龍撲食')
    tech.pole7 = new Technique({}, 'Diu Yù', 'Hoist the Fish', 'Long Pole', '吊魚')
    tech.pole8 = new Technique({}, 'Gwán Fā', 'Rolling Flowers', 'Long Pole', '滾花')
    tech.pole9 = new Technique({}, 'Chēng Lùng Hēi Séui', 'Azure Dragon Plays in the Water', 'Long Pole', '青龍嬉水')
    tech.pole10 = new Technique({}, 'Yù Yūng Saat Gōng', 'Old Fisherman Casts the Net', 'Long Pole', '魚翁撒綱')
    tech.pole11 = new Technique({}, 'Chēng Lùng Chìn Chyú', 'Azure Dragon Coils Around the Pillar', 'Long Pole', '青龍纏柱')

    return tech;
}