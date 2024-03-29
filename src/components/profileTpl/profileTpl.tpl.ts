export default `<div class="profilePage-box">
    <div class="box-return">
        {{{arrowButton}}}
    </div>
    <div class="box-profile">
        <div class="box-profile-footer">
            {{{avatar}}}
        </div>
        <form id="profile-data">
            <ul class="profile-form-wrapper">
                {{#if profile}}
                    {{{email}}}
                    {{{login}}}
                    {{{first_name}}}
                    {{{second_name}}}
                    {{{phone}}}
                    {{{display_name}}}
                    {{{password}}}
                    {{{passwordScd}}}
                {{else}}
                    {{{oldPassword}}}
                    {{{newPassword}}}
                    {{{passwordScd}}}
                {{/if}}
            </ul>
            <div class="box-profile-bottom">
                {{#if buttons}}
                    {{{button}}}
                {{else}}
                    <ul class="list-wrapper">
                        {{{changeData}}}
                        {{{changePassword}}}
                        {{{exit}}}
                    </ul>
                {{/if}}

            </div>
        </form>
    </div>
</div>`
