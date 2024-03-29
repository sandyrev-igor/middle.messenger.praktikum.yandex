export default `<div class="box">
    <div class="content-box">
        <div class="footer-title">
            <span>{{footerTitle}}</span>
        </div>
        <div class="form-wrapper">
            <form id="formElem">
                <ul class="form-block-input">
                    {{#if auth}}
                        {{{login}}}
                        {{{password}}}
                    {{/if}}
                    {{#if register}}
                        {{{email}}}
                        {{{login}}}
                        {{{first_name}}}
                        {{{second_name}}}
                        {{{phone}}}
                        {{{password}}}
                        {{{passwordScd}}}
                    {{/if}}
                </ul>
                {{{goButton}}}
                {{{altBtn}}}
            </form>
        </div>
    </div>
</div>`

