import challengeNode from './challenge-node.svg?raw'

export default function yellowChallenges()
{
    const ch = {}

    ch.a = {
        name: '108 Roads',
        desc: 'Learn the complete set and rehearse it 108 times.  Mark progress each time you complete 18 reps.',
        repetitions: 108,
        uniqueID: 'yellow1'
    }

    ch.b = {
        name: 'Monk Stokes the Forge',
        desc: 'Speed Drill: Perform 100 repetitions of Tiu Tong Cheui, Jyun Cheui in 2 minutes or less.',
        repetitions: 3,
        uniqueID: 'yellow2'
    }

    ch.c = {
        name: 'Heart Stealing',
        desc: 'Advance into Tau Sam Cheui in a low Ma Bou.  Advance again on the other side.  Repeat 108 times.',
        repetitions: 108,
        uniqueID: 'yellow3'
    }

    ch.d = {
        name: 'Build the Foundation',
        desc: 'Pivot between Ma Bou and Dang Saan Bou, holding each stance for 3 seconds.',
        repetitions: 200,
        uniqueID: 'yellow4'
    }

    ch.e = {
        name: 'Cross-Shaped Kick',
        desc: 'Perform Sap Ji Teui once on each side for 180 reps',
        repetitions: 180,
        uniqueID: 'yellow5'
    }

    ch.f = {
        name: 'Wiping the Pull',
        desc: 'Partner Drill: Perform a wiping defense as your opponent grabs to pull the arm.',
        repetitions: 108,
        uniqueID: 'yellow6'
    }

    ch.g = {
        name: 'Heart Stealing II',
        desc: 'Partner Drill: Advance into Tau Sam Cheui in a low Ma Bou while your opponent defends and retreats.  Advance again on the other side.',
        repetitions: 108,
        uniqueID: 'yellow7'
    }

    for (const challenge of Object.values(ch)) {
        challenge.img = challengeNode
    }

    return ch;
}