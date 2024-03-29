export default `<span class="cross-elem"></span>
<div class="control-code">
    {{description}}
</div>
<div class="control-description">
    {{{value}}}
    <span>{{chatTitle}}</span>
    {{#if users}}
        <select name="user" class="select-user">
            {{#each users}}
                <option name="user">{{this}}</option>
            {{/each}}
        </select>
    {{/if}}
</div>
{{{sendReq}}}
`

