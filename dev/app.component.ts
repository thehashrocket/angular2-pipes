import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <section class="pipe">
            <h2>The Date Pipe</h2>
            <p>Today is {{ today | date:'short'}}</p>
        </section>
        <section class="pipe">
            <h2>The lowercase and UPPERCASE Pipe</h2>
            <input type="text" #inputCasePipes (keyup)="0"><br/>
            <div>Output Lowercase: {{inputCasePipes.value | lowercase}}</div>
            <div>Output UPPERCASE: {{inputCasePipes.value | uppercase}}</div>
        </section>
        <section class="pipe">
            <h2>The Slice Pipe</h2>
            <input type="text" #inputSlicePipe (keyup)="0"> - from 
            <input type="text" #start (keyup)="0"> to 
            <input type="text" #end (keyup)="0">
            <div>Output: {{inputSlicePipe.value | slice:start.value:end.value}}</div>
        </section>
        <section class="pipe">
            <h2>Number Pipes</h2>
            <input type="text" #inputNumberPipes (keyup)="0"> - currency: <input type="text" #currency value="EUR" (change)="0"> <br/>
            <div>Decimal: {{1.0 * inputNumberPipes.value | number:'1.1-2'}}</div>
            <div>Currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2-2'}}</div>
            <input type="checkbox" #currencyShort checked (change)="0">Short currency code
        </section>
        
       
    `,
})
export class AppComponent {
    today = Date.now();
}