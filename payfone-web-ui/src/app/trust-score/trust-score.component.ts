import { Component } from '@angular/core';

import { TrustScoreService } from '../../services/trust-score.service';

@Component({
    selector: 'app-trust-score',
    templateUrl: './trust-score.component.html',
    styleUrls: ['./trust-score.component.less']
})
export class TrustScoreComponent {

    // Form input/s
    private model: any = {};

    private red: string = "#CC0000";
    private lightRed: string = "#FF0000";

    private yellow: string = "#F4F400";
    private lightYellow: string = "#FFFF33";

    private green: string = "#78C000";
    private lightGreen: string = "#C7E596";

    private response: string;
    private phoneNumber: string;
    private lineType: string;
    private carrier: string;
    private trustScore: number;
    private outerStrokeColor: string;
    private innerStrokeColor: string;
    private percent: number = 0;

    constructor(private trustScoreService: TrustScoreService) { }

    getTrustScore() {
        // Sample Phone Number: +1 (201) 206-1625

        var phoneNumber = this.model.inputPhoneNumber;

        this.trustScoreService.getTrustScore(phoneNumber)
            .subscribe(
                data => {
                    this.response = JSON.stringify(data, null, 4);
                    console.log('trust score result: ' + this.response);
                    this.setContent(data);
                },
                error => {
                    this.response = "error/fake"
                    this.phoneNumber = "+1 (303) 123-4567 (mocked)";
                    this.lineType = "Mobile (mocked)";
                    this.carrier = "Verizon (mocked)";
                    this.trustScore = Math.trunc(Math.random() * 1000);
                    this.percent = 95;
                    this.setScoreIndicatorColors(this.trustScore);
                });
    }

    private setContent(data: any) {
        this.phoneNumber = this.formatPhoneNumber(data.response.phoneNumber);
        this.lineType = data.response.lineType;
        this.carrier = data.response.carrier;
        this.trustScore = data.response.trustScore;
        this.percent = 95;
        // this.percent = Math.round((Number(this.trustScore) / 1000) * 100);
        // if (this.percent <= 0) {
        //     this.percent = 5;
        // }
        // else if (this.percent >= 100) {
        //     this.percent = 97;
        // }

        // Set score/meter indicator details
        this.setScoreIndicatorColors(this.trustScore);
    }

    private setScoreIndicatorColors(score: number) {
        if (score >= 650) {
            this.outerStrokeColor = this.green;
            this.innerStrokeColor = this.lightGreen;
        }
        else if (score >= 325) {
            this.outerStrokeColor = this.yellow;
            this.innerStrokeColor = this.lightYellow;
        }
        else {
            this.outerStrokeColor = this.red;
            this.innerStrokeColor = this.lightRed;
        }
    }

    formatPhoneNumber(phoneNumberString: string) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            var intlCode = (match[1] ? '+1 ' : '');
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
    }

    clear(event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.model = {};
        this.response = null;
        this.phoneNumber = null;
        this.lineType = null;
        this.carrier = null;
        this.trustScore = null;
        this.outerStrokeColor = null;
        this.innerStrokeColor = null;
    }
}

