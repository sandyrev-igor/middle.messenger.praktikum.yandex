export default `<div class="label-input-section">
    {{#if label}}
        <label>{{label}}</label>
    {{/if}}
    <input
        class="{{inputClass}}"
        id="id{{inputId}}"
        type="{{inputType}}"
        name="{{inputName}}"
        placeholder="{{inputId}}"
        {{disabled}}
        value="{{inputValue}}"
    />
</div>
<span class="input-invalid">{{inputInvalid}}</span>
`

