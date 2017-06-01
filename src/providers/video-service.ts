import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
    private _videosList: Array<any> = [
        { title: 'sabari godhavari sangamam', url: 'https://www.youtube.com/watch?v=db3iyUgY4kQ', desc: 'sabari godhavari sangamam. It is one of the tourist spot on the way to papikondalu point route.', category: 'Khammam' , thumb: 'https://i.ytimg.com/vi/db3iyUgY4kQ/hqdefault.jpg' },
        { title: 'Seetamma vari nara cheeralu, parnasala', url: 'https://www.youtube.com/watch?v=Lv7OpqfFQlU', desc: 'One of the important places near parnasala Seethamma vari nara chera point. Here seetha spend some time long back.', category: 'Khammam' , thumb: 'https://i.ytimg.com/vi/Lv7OpqfFQlU/hqdefault.jpg' },
        { title: 'Ramayana drusya kavyam, bharachalam', url: 'https://www.youtube.com/watch?v=KPDDwyabOjs', desc: 'Ramayana Drusya kavyam around Bhadrachalam Temple. It shows total history of bhadrachalam Temple.', category: 'Khammam' , thumb: 'https://i.ytimg.com/vi/KPDDwyabOjs/hqdefault.jpg' },
        { title: 'Parnasala, Near bhadrachalam', url: 'https://www.youtube.com/watch?v=XNQrkoW4Tcw', desc: 'Parnasala is a village in the Dummugudem mandal in the Khammam district of Telangana, India. The village is accessible by road and boats and is situated 32 km from the temple town of Bhadrachalam.Parnasala, which became a much visited picnic spot in Bhadrachalam is said to be the place where the evil-minded king Ravan abducted Goddess Sita. This place unfolds this part of the epic Ramayana by exhibiting the primary events with beautifully canvassed sculptures of Shri Ram, Sita, Laxman, and Ravan.', category: 'Khammam' , thumb: 'https://i.ytimg.com/vi/XNQrkoW4Tcw/hqdefault.jpg' },
        { title: 'Kunavaram forest', url: 'https://www.youtube.com/watch?v=wp0xgtQilbc', desc: 'Kunavaram Forest. Earlier it is in telangana. After bifurcation of state these area went to andhra pradesh. Tourists enjoy this forest environment on the way to pocharam..papikondalu visit point.', category: 'Khammam' , thumb: 'https://i.ytimg.com/vi/wp0xgtQilbc/hqdefault.jpg' },
        { title: 'Nara lokesh Shocking swearing in as mlc', url: 'https://www.youtube.com/watch?v=iXMDiDv4y1Y', desc: 'Nara lokesh Failed to swearing in properly. He is unable to pronounce some telugu words. Tdp leaders also shocked lokesh language .', category: 'Others' , thumb: 'https://i.ytimg.com/vi/iXMDiDv4y1Y/hqdefault.jpg' },
        { title: 'Fort Aguada,Goa', url: 'https://www.youtube.com/watch?v=HXypi7jVK8M', desc: 'Fort Aguada and its lighthouse is a well-preserved seventeenth-century Portuguese fort standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea. he fort was constructed in 1612 to guard against the Dutch and the Marathas. It was a reference point for the vessels coming from Europe at that time. This old Portuguese fort stands on the beach south of Candolim, at the shore of the Mandovi River.', category: 'Goa' , thumb: 'https://i.ytimg.com/vi/HXypi7jVK8M/hqdefault.jpg' },
        { title: 'Goa Casinos', url: 'https://www.youtube.com/watch?v=NbvhO1nd-8o', desc: 'Goa Casinos. In India Only state goa have casinos. The Casino Goa is a live casino located offshore in Panaji in Goa. The casino is located on a yacht, the M.V. Caravela, anchored in the River Mandovi. The casino vessel worth is 110 million Rupees and is owned by the Advani Pleasure Cruise Co Ltd as a joint venture between the company and Casinos Austria.', category: 'Goa' , thumb: 'https://i.ytimg.com/vi/NbvhO1nd-8o/hqdefault.jpg' },
        { title: 'Coco Beach, Goa', url: 'https://www.youtube.com/watch?v=YlSojRKndfo', desc: 'Coco beach is situated at the mouth of the Nerul River on the Mandovi Estuary, directly opposite Panaji. This beach is often considered as the abridged gateway between Candolim and Nerul. The thriving fishing village has gained prominence in recent years with its exquisite location and popularity with foreign tourists.', category: 'Goa', thumb: 'https://i.ytimg.com/vi/YlSojRKndfo/hqdefault.jpg'  },
        { title: 'Dolphin trip in Goa', url: 'https://www.youtube.com/watch?v=eOwBTRzqCR4', desc: 'Dolphin trip in Goa: Varca, located in South Goa in Goa is very popular for dolphin spotting trips. Several boat trips are arranged for this event. While spotting a dolphin isn’t guaranteed on the boat ride, the boat trip itself is quite enjoyable.', category: 'Goa' , thumb: 'https://i.ytimg.com/vi/eOwBTRzqCR4/hqdefault.jpg' },
        { title: 'Flight landing in goa airport', url: 'https://www.youtube.com/watch?v=fjNRDDpkHpQ', desc: 'Goa International Airport, also known as the Dabolim airport, is the sole airport in the state of Goa, located in the city of Dabolim in Goa, India. Every year lakhs of tourists arrive to here.', category: 'Goa' , thumb: 'https://i.ytimg.com/vi/fjNRDDpkHpQ/hqdefault.jpg' },
        { title: 'Candolim Beach , Goa', url: 'https://www.youtube.com/watch?v=_4rj-EsCz0w', desc: 'Candolim Beach surround a 19th-century lighthouse. The whitewashed, centuries-old Church of St. Lawrence stands on a nearby hill.  In the south, the sturdy walls of Aguada Fort, built in the early 1600s under Portuguese colonial rule.', category: 'Goa' , thumb: 'https://i.ytimg.com/vi/_4rj-EsCz0w/hqdefault.jpg' },
    ];

    private _videosCategories: Array<any> = [
        "Warangal",
        "Hyderabad",
        "Khammam",
        "Mahabubnagar",
        "Nalagonda",
        "Goa",
        "Others"
    ] 
    
    constructor(){

    };

    get videosList(): Array<any> {
        return this._videosList; 
    }

    get videosCategories(): Array<any> {
        return this._videosCategories; 
    }

    public getVideoThumb(videoUrl: string): string {
        let videoId = videoUrl.split('//').pop().split('/').pop();
        var thumbUrl = 'http://img.youtube.com/vi/'+videoId+'/1.jpg';
        return thumbUrl;
    }
}