import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
    private _videosList: Array<{ title: string, url: string, desc: string, category: string, thumb: string }> = [
        { title: 'Birla Mandir', url: 'https://www.youtube.com/watch?v=dzkaIGqNXd0', desc: 'Birla Mandir Located Heart of the hyderabad city. It is a Hindu temple, built on a 280 feet high hillock called Naubath Pahad on a 13 acres plot. The construction took 10 years and was opened in 1976 by Swami Ranganathananda of Ramakrishna Mission.', category: 'Hyderabad', thumb: 'https://i.ytimg.com/vi/dzkaIGqNXd0/hqdefault.jpg' },
        { title: 'Republic day Colours of Telangana secretariat', url: 'https://www.youtube.com/watch?v=mBwfjEfXdhM', desc: 'Telangana secretariat is now colourful with lights. On the eve of republic day.', category: 'Hyderabad', thumb: 'https://i.ytimg.com/vi/mBwfjEfXdhM/hqdefault.jpg' },
        { title: 'Yadagirigutta', url: 'https://www.youtube.com/watch?v=cMlSK9j92xU', desc: 'Yadagirigutta  Now Turned as yadadri. Yadadri is a popular hindu temple situated on hillock in Yadagirigutta of Yadadri Bhuvanagiri district.  The temple is an abode of Narasimha, an incarnation of Lord Vishnu.', category: 'Nalagonda', thumb: 'https://i.ytimg.com/vi/cMlSK9j92xU/hqdefault.jpg' },
        { title: 'Historical Golkonda Fort, Hyderabad', url: 'https://www.youtube.com/watch?v=_x7oXqAJ8z8', desc: 'Golkonda original name was Gollakonda. In usage it become a golkonda. Golkonda Fort was first built by the Kakatiya dynasty as part of their western defenses along the lines of the Kondapalli Fort. he city and the fortress were built on a granite hill that is 120 meters (480 ft) high, surrounded by massive battlements.', category: 'Hyderabad', thumb: 'https://i.ytimg.com/vi/_x7oXqAJ8z8/hqdefault.jpg' },
        { title: 'Outer Ring Road, Hyderabad', url: 'https://www.youtube.com/watch?v=aYd9dbkHrfM', desc: 'Hyderabad outer ring road is a 158 kilometer, 8-lane ring road expressway . With Beautiful greenary cover. journey in this express way give plasure to passengers', category: 'Hyderabad', thumb: 'https://i.ytimg.com/vi/aYd9dbkHrfM/hqdefault.jpg' },
        { title: 'Hyderabad to vizag Flight journey', url: 'https://www.youtube.com/watch?v=X9UO3kM_uHo', desc: 'Flight journey Hyderabad to visakapatnam, see view from sky.', category: 'Hyderabad', thumb: 'https://i.ytimg.com/vi/X9UO3kM_uHo/hqdefault.jpg' },
        { title: 'Seetamma vari nara cheeralu, parnasala', url: 'https://www.youtube.com/watch?v=Lv7OpqfFQlU', desc: 'One of the important places near parnasala Seethamma vari nara chera point. Here seetha spend some time long back.', category: 'Khammam', thumb: 'https://i.ytimg.com/vi/Lv7OpqfFQlU/hqdefault.jpg' },
        { title: 'Ramayana drusya kavyam, bharachalam', url: 'https://www.youtube.com/watch?v=KPDDwyabOjs', desc: 'Ramayana Drusya kavyam around Bhadrachalam Temple. It shows total history of bhadrachalam Temple.', category: 'Khammam', thumb: 'https://i.ytimg.com/vi/KPDDwyabOjs/hqdefault.jpg' },
        { title: 'Parnasala, Near bhadrachalam', url: 'https://www.youtube.com/watch?v=XNQrkoW4Tcw', desc: 'Parnasala is a village in the Dummugudem mandal in the Khammam district of Telangana, India. The village is accessible by road and boats and is situated 32 km from the temple town of Bhadrachalam.Parnasala, which became a much visited picnic spot in Bhadrachalam is said to be the place where the evil-minded king Ravan abducted Goddess Sita. This place unfolds this part of the epic Ramayana by exhibiting the primary events with beautifully canvassed sculptures of Shri Ram, Sita, Laxman, and Ravan.', category: 'Khammam', thumb: 'https://i.ytimg.com/vi/XNQrkoW4Tcw/hqdefault.jpg' },
        { title: 'Kunavaram forest', url: 'https://www.youtube.com/watch?v=wp0xgtQilbc', desc: 'Kunavaram Forest. Earlier it is in telangana. After bifurcation of state these area went to andhra pradesh. Tourists enjoy this forest environment on the way to pocharam..papikondalu visit point.', category: 'Khammam', thumb: 'https://i.ytimg.com/vi/wp0xgtQilbc/hqdefault.jpg' },

    ];

    private _videosCategories: Array<any> = [
        "Warangal",
        "Hyderabad",
        "Khammam",
        "Mahabubnagar",
        "Nalagonda",
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