import { Component, Input } from '@angular/core';

@Component({
    selector: 'templates-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>firsticon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>lasticon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>nexticon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>previcon</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>`
})
export class TemplatesDoc {
    @Input() id: string;

    @Input() title: string;
}