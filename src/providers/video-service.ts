import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
    private _videosList: Array<{ title: string, url: string, desc: string, category: string, thumb: string }> = [
        { title: 'Sabari Godhavari Sangamam', url: 'https://www.youtube.com/watch?v=db3iyUgY4kQ', desc: 'sabari godhavari sangamam. It is one of the tourist spot on the way to papikondalu point route.', category: 'Nellore', thumb: 'https://i.ytimg.com/vi/db3iyUgY4kQ/hqdefault.jpg' },
        { title: 'Rushikonda Beach', url: 'https://www.youtube.com/watch?v=rr98tHzGhtA', desc: 'Rushikonda Beach is located in Visakhapatnam on the coast of Bay of Bengal in the Indian state of Andhra Pradesh. The beach is maintained by the state tourism board, APTDC. At hill top tourisim dept guest houses give pleasure to customers.', category: 'Nellore', thumb: 'https://i.ytimg.com/vi/rr98tHzGhtA/hqdefault.jpg' },
        { title: 'Kailasagiri', url: 'https://www.youtube.com/watch?v=So4pO3iplfI', desc: 'Kailasagiri is a hilltop park in the city of Visakhapatnam. The park was developed by Visakhapatnam Urban Development Authority comprising 380 acres of land covered with flora and tropical trees. Now tourists can enjoy amravathi train ride in kailasagiri.', category: 'Vishakapatnam', thumb: 'https://i.ytimg.com/vi/So4pO3iplfI/hqdefault.jpg' },
        { title: 'RK Beach', url: 'https://www.youtube.com/watch?v=Wm4VPG8Kc10', desc: 'The Rama Krishna Mission Beach is one of the most popular beach parks in Visakhapatnam, Andhra Pradesh. It gets its name from the Ramakrishna Mission ashrama across the Beach Road from the park. It is main attraction to vizag city.', category: 'Vishakapatnam', thumb: 'https://i.ytimg.com/vi/Wm4VPG8Kc10/hqdefault.jpg' },
        { title: 'Galikonda View Point, Araku', url: 'https://www.youtube.com/watch?v=IiPhq2kS4i8', desc: 'Galikonda Viewpoint Is The Highest Point Of Vishakapatnam District, Which Gives a Spectacular View Of a Lush Green Valley, Hills. It is one of most important tourists attaraction in araku.', category: 'Vishakapatnam', thumb: 'https://i.ytimg.com/vi/IiPhq2kS4i8/hqdefault.jpg' },
        { title: 'Bheemili Beach', url: 'https://www.youtube.com/watch?v=GpW01w2vVAI', desc: 'Bheemili Beach is located at the origin of the Gosthani River, at a distance of 24 km from Visakhapatnam in Visakhapatnam district of the Indian state of Andhra Pradesh. The beach reflects the British and Dutch settlements.', category: 'Vishakapatnam', thumb: 'https://i.ytimg.com/vi/GpW01w2vVAI/hqdefault.jpg' },
        { title: 'Borra caves part 2', url: 'https://www.youtube.com/watch?v=sQ4cv0A2Jvk', desc: 'Borra caves new look. colourful lighting adds new attraction to historical caves. Tourists high turnout to this place.', category: 'Vishakapatnam', thumb: 'https://i.ytimg.com/vi/sQ4cv0A2Jvk/hqdefault.jpg' },
    ];

    private _videosCategories: Array<any> = [
        "Amaravati",
        "Nellore",
        "Vijayawada",
        "Vishakapatnam"
    ]

    constructor() {

    };

    get videosList(): Array<any> {
        return this._videosList;
    }

    get videosCategories(): Array<any> {
        return this._videosCategories;
    }

    public getVideoThumb(videoUrl: string): string {
        let videoId = videoUrl.split('//').pop().split('/').pop();
        var thumbUrl = 'http://img.youtube.com/vi/' + videoId + '/1.jpg';
        return thumbUrl;
    }
    public getEmbedUrl(videoUrl: string): string {
        let videoId = videoUrl.split('//').pop().split('/').pop().split('=').pop();
        console.log(videoId);
        var thumbUrl = 'https://www.youtube.com/embed/' + videoId;
        return thumbUrl;
    }
}