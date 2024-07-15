export default `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        /* Border Radius */
        --card-radius: theme(borderRadius.xl);
        --btn-radius: var(--card-radius);
        --badge-radius: var(--btn-radius);
        --input-radius: var(--btn-radius);
        --avatar-radius: theme(borderRadius.full);
        --annonce-radius: var(--avatar-radius);

        /* Border Color */
        --ui-border-color: theme(colors.gray.200);
        --btn-border:theme(colors.gray.200);
        --badge-border : var(--btn-border);
        --input-border: var(--ui-border-color);
        --ui-disabled-border : theme(colors.gray.100);
        --ui-error-border : theme(colors.danger.600);
        --ui-success-border : theme(colors.success.600);
        --input-outline:theme(colors.primary.600);

        --ui-bg: theme(colors.white/var(--ui-bg-opacity));
        --ui-soft-bg: theme(colors.gray.100);
        --overlay-bg: theme(colors.gray.950/0.25);
        --btn-bg:theme(colors.primary.600);
        --badge-bg: var(var(--btn-bg));
        --input-bg:var(--ui-soft-bg);
        --ui-disabled-bg : theme(colors.gray.100);

        /* Typography */
        --display-text-color: theme(colors.gray.950);
        --title-text-color: var(--display-text-color);
        --body-text-color: theme(colors.gray.700);
        --caption-text-color: theme(colors.gray.500);
        --placeholder-text-color: theme(colors.gray.400);

        /* Opacity */
        --ui-bg-opacity: 1;

        color : var(--body-text-color);

        @apply dark:[--ui-border-color:theme('colors.gray.800')] dark:[--ui-disabled-bg:theme('colors.gray.900')] dark:[--ui-bg:theme('colors.gray.900/var(--ui-bg-opacity)')] dark:[--ui-soft-bg:theme('colors.gray.800')] dark:[--display-text-color:theme('colors.white')] dark:[--body-text-color:theme('colors.gray.300')] dark:[--placeholder-text-color:theme('colors.gray.600')]
    }

    *{
        border-color: var(--ui-border-color);
    }

    button:disabled {
        border:none;
        background: var(--ui-disabled-bg);
        background-image: none;
        box-shadow: none;
        color: var(--placeholder-text-color);
        pointer-events: none;
    }

    a:focus-visible, button:focus-visible {
        @apply outline-2 outline-offset-2 focus-visible:outline outline-primary-600
    }

    input:user-invalid, textarea:user-invalid, select:user-invalid {
        --input-border: var(--ui-error-border);
        --ui-border-color: var(--ui-error-border);
        --input-outline : var(--ui-error-border);
        --title-text-color : theme(colors.danger.600);

        @apply dark:[--title-text-color:theme(colors.danger.400)]
    }

    /* Data attributes */
    /* Rounded Data attributes */
    [data-rounded="none"] {
        --card-radius: theme(borderRadius.none);
        --avatar-radius: theme(borderRadius.none);
    }

    [data-rounded="default"] {
        --card-radius: theme("borderRadius.DEFAULT");
    }

    [data-rounded="small"] {
        --card-radius: theme("borderRadius.sm");
    }

    [data-rounded="medium"] {
        --card-radius: theme("borderRadius.md");
    }

    [data-rounded="large"] {
        --card-radius: theme("borderRadius.lg");
    }

    [data-rounded="xlarge"] {
        --card-radius: theme("borderRadius.xl");
    }

    [data-rounded="2xlarge"] {
        --card-radius: theme("borderRadius.2xl");
        --input-radius: theme("borderRadius.xl");
    }

    [data-rounded="3xlarge"] {
        --card-radius: theme("borderRadius.3xl");
        --input-radius: theme("borderRadius.xl");
    }
    
    [data-rounded="full"] {
        --card-radius: theme("borderRadius.3xl");
        --btn-radius: theme("borderRadius.full");
        --input-radius: theme("borderRadius.2xl");
    }

    /* Shade Data Attributes */

    [data-shade="glassy"] {
        --ui-bd-blur: theme("blur[2xl]");
        --ui-bg-opacity: 0.75;
        --ui-bg: theme("colors.white/var(--ui-bg-opacity)");

        @apply dark:[--ui-bg-opacity:0.5] dark:[--ui-border-color:theme(colors.gray.50/0.1)] dark:[--ui-bg:theme(colors.gray.700/var(--ui-bg-opacity))] dark:[--ui-soft-bg:theme(colors.gray.600/0.50)]
    }

    [data-shade="800"] {
        @apply dark:[--ui-border-color:theme(colors.gray.700)] dark:[--ui-bg:theme(colors.gray.800)] dark:[--ui-soft-bg:theme(colors.gray.900)]
    }

    [data-shade="900"] {
        @apply dark:[--ui-border-color:theme(colors.gray.800)] dark:[--ui-bg:theme(colors.gray.900)] dark:[--ui-soft-bg:theme(colors.gray.800)] 
    }

    [data-shade="925"] {
        @apply dark:[--ui-border-color:theme(colors.gray.800)] dark:[--ui-bg:theme(colors.gray.925)] dark:[--ui-soft-bg:theme(colors.gray.800)]
    }

    [data-shade="950"] {
        @apply dark:[--ui-border-color:theme(colors.gray.800)] dark:[--ui-bg:theme(colors.gray.950)] dark:[--ui-soft-bg:theme(colors.gray.800)]
    }
}

@layer utilities {
    /* Typography */
    .text-display {
        color : var(--display-text-color);
    }

    .text-title {
        color : var(--title-text-color);
    }

    .text-body {
        color : var(--body-text-color);
    }

    .text-caption {
        color : var(--caption-text-color)
    }

    .text-placeholder {
        color : var(--placeholder-text-color)
    }

    /* Border Radius */
    .rounded-card{
        border-radius: var(--card-radius);
    }

    .rounded-btn{
        border-radius: var(--btn-radius);
    }

    .rounded-badge{
        border-radius: var(--badge-radius);
    }

    .rounded-annonce{
        border-radius: var(--annonce-radius);
    }

    .rounded-input{
        border-radius: var(--input-radius);
    }

    .rounded-avatar{
        border-radius: var(--avatar-radius);
    }

    /* Background */
    .bg-ui{
        background: var(--ui-bg);
    }

    .bg-ui-soft{
        background: var(--ui-soft-bg);
    }

    .bg-overlay{
        background: var(--ui-bg-opacity);
    }
}

@layer components {
    /* Button */

    .btn{
        @apply flex justify-center gap-1.5 items-center rounded-[--btn-radius]
    }

    .btn.solid {
        transition:filter;
        @apply bg-gradient-to-b [box-shadow:rgba(255,255,255,0.25)_0px_1px_0px_0px_inset,var(--btn-border-color)_0px_0px_0px_1px] text-white hover:brightness-[1.1] duration-150 ease-in-out active:brightness-95 dark:shadow-inner dark:to-0% dark:border-t dark:shadow-white/10
    }

    .btn.outlined {
        transition:filter;
        @apply [--outline-radial-opacity:0.6] dark:[background-image:none] [--inner-border-color:1] dark:[--inner-border-color:0] dark:[--outline-radial-opacity:0.2] [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--outline-radial-opacity))_0%,transparent_100%)] [box-shadow:rgba(255,255,255,var(--inner-border-color))_0px_1px_0px_0px_inset,var(--btn-border-color)_0px_0px_0px_1px,0px_1px_2px_rgba(0,0,0,0.1)] hover:brightness-[0.98] active:brightness-100 ease-in-out duration-150
    }

    .btn.xs {
        @apply text-sm h-7 px-3
    }

    .btn.sm {
        @apply text-sm h-8 px-3.5
    }

    .btn.md{
        @apply text-base h-9 px-4
    }

    .btn.lg{
        @apply text-base h-10 px-5
    }

    .btn.xl{
        @apply text-lg h-12 px-6
    }

    .btn.icon-only.xs {
        @apply size-7
    }

    .btn.icon-only.sm {
        @apply size-8
    }

    .btn.icon-only.md{
        @apply size-9
    }

    .btn.icon-only.lg{
        @apply size-10
    }

    .btn.icon-only.xl{
        @apply size-12
    }

    .btn.solid.primary {
        @apply from-primary-500 to-primary-600 [--btn-border-color:theme('colors.primary.700')] dark:border-primary-400/75
    }

    .btn.solid.secondary {
        @apply from-secondary-500 to-secondary-600 [--btn-border-color:theme('colors.secondary.700')] dark:border-secondary-400/75
    }

    .btn.solid.accent {
        @apply from-accent-500 to-accent-600 [--btn-border-color:theme('colors.accent.700')] dark:border-accent-400/75
    }

    .btn.solid.info {
        @apply from-info-500 to-info-600 [--btn-border-color:theme('colors.info.700')] dark:border-info-400/75
    }

    .btn.solid.success {
        @apply from-success-500 to-success-600 [--btn-border-color:theme('colors.success.700')] dark:border-success-400/75
    }

    .btn.solid.danger {
        @apply from-danger-500 to-danger-600 [--btn-border-color:theme('colors.danger.700')] dark:border-danger-400/75
    }

    .btn.solid.warning {
        @apply from-warning-400 to-warning-500 text-warning-950 [--btn-border-color:theme(colors.warning.600)] dark:border-warning-300
    }

    .btn.solid.gray {
        @apply from-gray-500 to-gray-600 [--btn-border-color:theme('colors.gray.700')] dark:border-gray-400/75
    }

    .btn.solid.neutral {
        @apply bg-gray-900 [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,0.5)_0%,transparent_100%)] [box-shadow:rgba(255,255,255,0.3)_0px_1px_0px_0px_inset,theme(colors.gray.950)_0px_0px_0px_1px] hover:brightness-125 dark:bg-white dark:text-gray-950 dark:border-gray-300
    }

    .btn.outlined.primary {
        @apply [--btn-border-color:theme(colors.primary.200)] dark:[--btn-border-color:theme(colors.primary.500/0.3)] text-primary-800 bg-primary-50 dark:text-primary-300 dark:bg-primary-500/5 dark:hover:bg-primary-500/10 dark:active:bg-primary-500/5
    }

    .btn.outlined.secondary {
        @apply [--btn-border-color:theme(colors.secondary.200)] dark:[--btn-border-color:theme(colors.secondary.500/0.3)] text-secondary-800 bg-secondary-50 dark:text-secondary-300 dark:bg-secondary-500/5 dark:hover:bg-secondary-500/10 dark:active:bg-secondary-500/5
    }

    .btn.outlined.accent {
        @apply [--btn-border-color:theme(colors.accent.200)] dark:[--btn-border-color:theme(colors.accent.500/0.3)] text-accent-800 bg-accent-50 dark:text-accent-300 dark:bg-accent-500/5 dark:hover:bg-accent-500/10 dark:active:bg-accent-500/5
    }

    .btn.outlined.info {
        @apply [--btn-border-color:theme(colors.info.200)] dark:[--btn-border-color:theme(colors.info.500/0.3)] text-info-800 bg-info-50 dark:text-info-300 dark:bg-info-500/5 dark:hover:bg-info-500/10 dark:active:bg-info-500/5
    }

    .btn.outlined.danger {
        @apply [--btn-border-color:theme(colors.danger.200)] dark:[--btn-border-color:theme(colors.danger.500/0.3)] text-danger-800 bg-danger-50 dark:text-danger-300 dark:bg-danger-500/5 dark:hover:bg-danger-500/10 dark:active:bg-danger-500/5
    }

    .btn.outlined.success {
        @apply [--btn-border-color:theme(colors.success.200)] dark:[--btn-border-color:theme(colors.success.500/0.3)] text-success-800 bg-success-50 dark:text-success-300 dark:bg-success-500/5 dark:hover:bg-success-500/10 dark:active:bg-success-500/5
    }

    .btn.outlined.gray {
        @apply [--btn-border-color:theme(colors.gray.200)] dark:[--btn-border-color:theme(colors.gray.500/0.3)] text-gray-800 bg-gray-50 dark:text-gray-300 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/5
    }

    .btn.outlined.warning {
        @apply [--btn-border-color:theme(colors.warning.200)] dark:[--btn-border-color:theme(colors.warning.500/0.3)] text-warning-800 bg-warning-50 dark:text-warning-300 dark:bg-warning-500/5 dark:hover:bg-warning-500/10 dark:active:bg-warning-500/5
    }

    .btn.outlined.neutral {
        @apply [--btn-border-color:theme(colors.gray.300)] dark:[--btn-border-color:theme(colors.white)] text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-500/5 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/5
    }

    .btn.soft.primary {
        @apply text-primary-700 bg-primary-100 hover:bg-primary-200/75 active:bg-primary-100 dark:text-primary-300 dark:bg-primary-500/10 dark:hover:bg-primary-500/15 dark:active:bg-primary-500/10
    }
    .btn.soft.secondary {
        @apply text-secondary-700 bg-secondary-100 hover:bg-secondary-200/75 active:bg-secondary-100 dark:text-secondary-300 dark:bg-secondary-500/10 dark:hover:bg-secondary-500/15 dark:active:bg-secondary-500/10
    }
    .btn.soft.accent {
        @apply text-accent-700 bg-accent-100 hover:bg-accent-200/75 active:bg-accent-100 dark:text-accent-300 dark:bg-accent-500/10 dark:hover:bg-accent-500/15 dark:active:bg-accent-500/10
    }
    .btn.soft.gray {
        @apply text-gray-700 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-gray-300 dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10
    }
    .btn.soft.danger {
        @apply text-danger-700 bg-danger-100 hover:bg-danger-200/75 active:bg-danger-100 dark:text-danger-300 dark:bg-danger-500/10 dark:hover:bg-danger-500/15 dark:active:bg-danger-500/10
    }
    .btn.soft.success {
        @apply text-success-700 bg-success-100 hover:bg-success-200/75 active:bg-success-100 dark:text-success-300 dark:bg-success-500/10 dark:hover:bg-success-500/15 dark:active:bg-success-500/10
    }
    .btn.soft.info {
        @apply text-info-700 bg-info-100 hover:bg-info-200/75 active:bg-info-100 dark:text-info-300 dark:bg-info-500/10 dark:hover:bg-info-500/15 dark:active:bg-info-500/10
    }
    .btn.soft.warning {
        @apply text-warning-700 bg-warning-100 hover:bg-warning-200/75 active:bg-warning-100 dark:text-warning-300 dark:bg-warning-500/10 dark:hover:bg-warning-500/15 dark:active:bg-warning-500/10
    }
    .btn.soft.neutral {
        @apply text-gray-950 bg-gray-100 hover:bg-gray-950 hover:text-white active:text-white active:bg-gray-900 dark:text-gray-300 dark:bg-gray-500/10 dark:hover:bg-white dark:hover:text-gray-950 dark:active:bg-gray-200 dark:active:text-gray-950
    }

    .btn.ghost.primary{
        @apply text-primary-600 hover:bg-primary-100 active:bg-primary-200/75 dark:text-primary-400 dark:hover:bg-primary-500/10 dark:active:bg-primary-500/15
    }
    .btn.ghost.secondary{
        @apply text-secondary-600 hover:bg-secondary-100 active:bg-secondary-200/75 dark:text-secondary-400 dark:hover:bg-secondary-500/10 dark:active:bg-secondary-500/15
    }
    .btn.ghost.accent{
        @apply text-accent-600 hover:bg-accent-100 active:bg-accent-200/75 dark:text-accent-400 dark:hover:bg-accent-500/10 dark:active:bg-accent-500/15
    }
    .btn.ghost.info{
        @apply text-info-600 hover:bg-info-100 active:bg-info-200/75 dark:text-info-400 dark:hover:bg-info-500/10 dark:active:bg-info-500/15
    }
    .btn.ghost.danger{
        @apply text-danger-600 hover:bg-danger-100 active:bg-danger-200/75 dark:text-danger-400 dark:hover:bg-danger-500/10 dark:active:bg-danger-500/15
    }
    .btn.ghost.success{
        @apply text-success-600 hover:bg-success-100 active:bg-success-200/75 dark:text-success-400 dark:hover:bg-success-500/10 dark:active:bg-success-500/15
    }
    .btn.ghost.warning{
        @apply text-warning-600 hover:bg-warning-100 active:bg-warning-200/75 dark:text-warning-400 dark:hover:bg-warning-500/10 dark:active:bg-warning-500/15
    }
    .btn.ghost.gray{
        @apply text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15
    }
    .btn.ghost.neutral{
        @apply text-gray-950 hover:bg-gray-950 hover:text-white active:text-white active:bg-gray-900 dark:text-white dark:hover:bg-white dark:hover:text-gray-950 dark:active:bg-gray-200 dark:active:text-gray-950
    }
 
    /* Badge */

    .badge{
        @apply rounded-[--badge-radius] flex items-center gap-1.5 size-fit
    }

    .badge.solid{
        @apply text-white
    }

    .badge.outlined{
        @apply border
    }

    .badge.xs {
        @apply px-1.5 py-0.5 text-xs
    }

    .badge.sm {
        @apply px-2 py-0.5 text-sm
    }

    .badge.md{
        @apply px-2.5 py-1 text-sm
    }

    .badge.lg{
        @apply px-3 py-1 text-base
    }

    .badge.solid.primary {
        @apply bg-primary-600 dark:bg-primary-400 dark:text-primary-950
    }

    .badge.solid.secondary {
        @apply bg-secondary-600 dark:bg-secondary-400 dark:text-secondary-950
    }

    .badge.solid.accent {
        @apply bg-accent-600 dark:bg-accent-400 dark:text-accent-950
    }

    .badge.solid.info {
        @apply bg-info-600 dark:bg-info-400 dark:text-info-950
    }

    .badge.solid.success {
        @apply bg-success-600 dark:bg-success-400 dark:text-success-950
    }

    .badge.solid.danger {
        @apply bg-danger-600 dark:bg-danger-400 dark:text-danger-950
    }

    .badge.solid.warning {
        @apply bg-warning-400 text-warning-950
    }

    .badge.solid.gray {
        @apply bg-gray-600 dark:bg-gray-400 dark:text-gray-950
    }

    .badge.outlined.primary, .annonce-concern.outlined.primary{
        @apply border-primary-200 text-primary-800 dark:border-primary-300/15 dark:text-primary-300
    }

    .badge.outlined.secondary, .annonce-concern.outlined.secondary{
        @apply border-secondary-200 text-secondary-800 dark:border-secondary-300/15 dark:text-secondary-300
    }

    .badge.outlined.accent, .annonce-concern.outlined.accent{
        @apply border-accent-200 text-accent-800 dark:border-accent-300/15 dark:text-accent-300
    }

    .badge.outlined.info, .annonce-concern.outlined.info{
        @apply border-info-200 text-info-800 dark:border-info-300/15 dark:text-info-300
    }

    .badge.outlined.success, .annonce-concern.outlined.success{
        @apply border-success-200 text-success-800 dark:border-success-300/15 dark:text-success-300
    }

    .badge.outlined.danger, .annonce-concern.outlined.danger{
        @apply border-danger-200 text-danger-800 dark:border-danger-300/15 dark:text-danger-300
    }

    .badge.outlined.warning, .annonce-concern.outlined.warning{
        @apply border-warning-300 text-warning-800 dark:border-warning-300/15 dark:text-warning-300
    }

    .badge.outlined.gray, .annonce-concern.outlined.gray{
        @apply border-gray-200 text-gray-800 dark:border-gray-300/15 dark:text-gray-300
    }

    .badge.soft.primary, .annonce-concern.soft.primary{
        @apply bg-primary-200 text-primary-800 dark:bg-primary-500/15 dark:text-primary-300
    }

    .badge.soft.secondary, .annonce-concern.soft.secondary{
        @apply bg-secondary-200 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300
    }

    .badge.soft.accent, .annonce-concern.soft.accent{
        @apply bg-accent-200 text-accent-800 dark:bg-accent-500/15 dark:text-accent-300
    }

    .badge.soft.info, .annonce-concern.soft.info{
        @apply bg-info-200 text-info-800 dark:bg-info-500/15 dark:text-info-300
    }

    .badge.soft.success, .annonce-concern.soft.success{
        @apply bg-success-200 text-success-800 dark:bg-success-500/15 dark:text-success-300
    }

    .badge.soft.danger, .annonce-concern.soft.danger{
        @apply bg-danger-200 text-danger-800 dark:bg-danger-500/15 dark:text-danger-300
    }

    .badge.soft.warning, .annonce-concern.soft.warning{
        @apply bg-warning-200 text-warning-900 dark:bg-warning-500/15 dark:text-warning-300
    }

    .badge.soft.gray, .annonce-concern.soft.gray{
        @apply bg-gray-200 text-gray-800 dark:bg-gray-500/15 dark:text-gray-300
    }

    /* Form field, input and textarea */
    .field{
        @apply relative space-y-2.5 *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none has-[:user-invalid]:[--caption-text-color:theme(colors.danger.600)] dark:has-[:user-invalid]:[--caption-text-color:theme(colors.danger.400)]
    }

    .input, .textarea{
        @apply w-full placeholder-[--placeholder-text-color] text-[--title-text-color] rounded-[--input-radius]
    }

    .input.outlined, .textarea.outlined{
        @apply outline-2 bg-transparent focus:outline-[--input-outline] -outline-offset-1 focus:outline border border-[--input-border]
    }

    .input.mixed, .textarea.mixed{
        @apply shadow-sm shadow-gray-950/5 dark:shadow-gray-950/35 outline-2 bg-[--ui-bg] focus:outline-[--input-outline] -outline-offset-1 focus:outline border border-[--input-border]
    }

    .input.soft, .textarea.soft {
        @apply outline-none bg-[--ui-soft-bg] focus:brightness-95 dark:focus:brightness-105
    }

    .input.plain, .textarea.plain {
        @apply rounded-none outline-none bg-transparent
    }

    .input.bottomOutlined, .textarea.bottomOutlined {
        @apply rounded-none focus:outline-none border-b border-[--input-border] focus:border-[--input-outline] focus:border-b-2
    }

    .input.sm {
        @apply text-sm h-8
    }

    .input.md {
        @apply text-sm h-9
    }

    .input.lg {
        @apply h-10
    }

    .input.xl {
        @apply h-12
    }

    .textarea.sm {
        @apply text-sm py-1.5
    }

    .textarea.md {
        @apply text-sm py-2
    }

    .textarea.lg {
        @apply py-3
    }

    .textarea.xl {
        @apply py-4
    }

    .input.mixed.sm, .input.outlined.sm, .input.soft.sm, .textarea.mixed.sm, .textarea.outlined.sm, .textarea.soft.sm {
        @apply px-2.5
    }

    .input.mixed.md, .input.outlined.md, .input.soft.md, .textarea.mixed.md, .textarea.outlined.md, .textarea.soft.md {
        @apply px-3
    }

    .input.mixed.lg, .input.outlined.lg, .input.soft.lg, .textarea.mixed.lg, .textarea.outlined.lg, .textarea.soft.lg {
        @apply px-4
    }

    .input.mixed.xl, .input.outlined.xl, .input.soft.xl, .textarea.mixed.xl, .textarea.outlined.xl, .textarea.soft.xl {
        @apply px-5
    }

    /* Card */

    .card{
        @apply p-[--card-padding] rounded-[--card-radius]
    }

    .card.outlined {
        @apply border bg-[--ui-bg]
    }

    .card.mixed {
        @apply border bg-[--ui-bg] shadow shadow-gray-950/5
    }

    .card.soft{
        @apply bg-[--ui-soft-bg]
    }

    /* Kbd */

    .kbd {
        @apply inline-flex items-center justify-center text-gray-800 dark:text-white h-5 text-[11px] min-w-5 px-1.5 rounded font-sans bg-gray-100 dark:bg-white/10 ring-1 border-b border-t border-t-white border-b-gray-200 dark:border-t-transparent dark:border-b-gray-950 ring-gray-300 dark:ring-white/15
    }

    /* Code */

    .code {
        @apply text-sm inline-block border rounded-md py-px px-1
    }

    .code.primary {
        @apply bg-primary-50 text-primary-600 dark:text-primary-300 border-primary-200 dark:border-primary-500/20 dark:bg-primary-500/5
    }

    .code.secondary {
        @apply bg-secondary-50 text-secondary-600 dark:text-secondary-300 border-secondary-200 dark:border-secondary-500/20 dark:bg-secondary-500/5
    }

    .code.accent {
        @apply bg-accent-50 text-accent-600 dark:text-accent-300 border-accent-200 dark:border-accent-500/20 dark:bg-accent-500/5
    }

    .code.gray {
        @apply bg-gray-50 text-[--body-text-color] dark:border-gray-500/20 dark:bg-gray-500/5
    }

    .code.neutral {
        @apply bg-gray-50 text-gray-950 dark:text-white dark:bg-gray-500/5 dark:border-gray-500/20
    }

    /* Link */

    .link {
        @apply transition text-primary-600 dark:text-primary-400
    }

    .link.ghost{
        @apply hover:underline
    }

    .link.underlined{
        @apply underline
    }

    .link.animated {
        @apply relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:scale-x-0 before:origin-right hover:before:origin-left hover:before:scale-x-100 before:transition before:duration-200
    }

    .link.info {
        @apply text-info-600 dark:text-info-400
    }

    .link.neutral {
        @apply text-gray-950 dark:text-white
    }

    .link.animated.neutral{
        @apply before:bg-gray-950/50 dark:before:bg-white/50
    }

    .link.underlined.neutral, .link.ghost.neutral{
        @apply decoration-gray-950/50 dark:decoration-white/50
    }

    /* Separator */
    .separator {
        @apply bg-[--ui-border-color] h-px w-full block
    }

    .separator.vertical{
        @apply w-px h-full
    }

    /* Annonce */
    .annonce{
        @apply flex items-center gap-3 w-fit rounded-[--annonce-radius]
    }

    .annonce.outlined{
        @apply border
    }

    .annonce.soft{
        @apply bg-[--ui-soft-bg]
    }

    .annonce.mixed{
        @apply border bg-[--ui-bg] shadow-sm shadow-gray-950/5 dark:shadow-gray-950/25
    }

    .annonce.xs{
        @apply py-0.5 pl-0.5 pr-3 [&>span]:rounded-[calc(var(--annonce-radius)-2px)]
    }

    .annonce.sm{
        @apply py-1 pl-1 pr-4 [&>span]:rounded-[calc(var(--annonce-radius)-4px)]
    }

    .annonce.md{
        @apply py-1.5 pl-1.5 pr-5 [&>span]:rounded-[calc(var(--annonce-radius)-6px)]
    }

    .annonce.lg{
        @apply py-2 pl-2 pr-6 [&>span]:rounded-[calc(var(--annonce-radius)-8px)]
    }

    .annonce-concern{
        @apply block text-white px-2 py-0.5
    }

    .annonce-concern.outlined{
        @apply border
    }

    .annonce-concern.xs{
        @apply text-xs
    }

    .annonce-concern.sm{
        @apply text-sm
    }

    .annonce-concern.md{
        @apply text-sm px-2.5
    }

    .annonce-concern.lg{
        @apply text-base px-3 py-1
    }

    .annonce-concern.solid.primary {
        @apply bg-primary-600
    }

    .annonce-concern.solid.secondary {
        @apply bg-secondary-600
    }

    .annonce-concern.solid.accent {
        @apply bg-accent-600
    }

    .annonce-concern.solid.info {
        @apply bg-info-600
    }

    .annonce-concern.solid.success {
        @apply bg-success-600
    }

    .annonce-concern.solid.danger {
        @apply bg-danger-600
    }

    .annonce-concern.solid.warning {
        @apply bg-warning-400
    }

    .annonce-concern.solid.gray {
        @apply bg-gray-600
    }

    /* Progress */
    .progress {
        @apply bg-[--ui-soft-bg] rounded-full overflow-hidden
    }

    .progress.xs {
        @apply h-0.5
    }

    .progress.sm {
        @apply h-1
    }

    .progress.md {
        @apply h-1.5
    }

    .progress.lg {
        @apply h-2.5
    }

    .progress.xl {
        @apply h-3.5
    }

    .progress-indicator{
        @apply h-full ease-[cubic-bezier(0.65,0,0.35,1)] rounded-full transition-transform duration-[660ms]
    }

    .progress-indicator.primary{
        @apply bg-primary-600
    }
    .progress-indicator.secondary{
        @apply bg-secondary-600
    }
    .progress-indicator.accent{
        @apply bg-accent-600
    }
    .progress-indicator.danger{
        @apply bg-danger-600
    }
    .progress-indicator.info{
        @apply bg-info-600
    }
    .progress-indicator.success{
        @apply bg-success-600
    }
    .progress-indicator.warning{
        @apply bg-warning-600
    }
    .progress-indicator.gray{
        @apply bg-gray-600
    }
    .progress-indicator.neutral{
        @apply bg-gray-950 dark:bg-white
    }

    /* Avatar */
    .avatar{
        @apply block border border-gray-950/5 dark:border-white/5 relative rounded-[--avatar-radius] *:rounded-[--avatar-radius] before:hidden
    }

    .avatar img{
        @apply size-full object-cover
    }

    .avatar.status{
        @apply before:absolute before:z-[1] before:block before:right-px before:rounded-full before:border-white dark:before:border-gray-950
    }

    .avatar.xs, .avatar.sm{
        @apply before:size-2 before:border-[1px]
    }

    .avatar.xxs{
        @apply text-xs size-6 before:size-1.5 before:border-[1px]
    }

    .avatar.xs{
        @apply text-xs size-7
    }

    .avatar.sm{
        @apply text-sm size-8
    }

    .avatar.md{
        @apply text-sm size-9 before:border-2 before:right-px before:size-2.5
    }

    .avatar.lg{
        @apply text-base size-10 before:top-0.5 before:right-0.5 before:size-2.5 before:border-[2px]
    }

    .avatar.xl{
        @apply text-lg size-12 before:top-[3px] before:border-2 before:right-[3px] before:size-2.5
    }

    .avatar.xxl{
        @apply text-sm size-16 before:size-3 before:border-2 before:top-1 before:right-1
    }

    .avatar.xxxl{
        @apply text-2xl size-20 before:size-3.5 before:border-2 before:top-1.5 before:right-1.5
    }

    .avatar.status.online{
        @apply before:bg-success-600 dark:before:bg-success-400
    }

    .avatar.status.offline{
        @apply before:bg-gray-600 dark:before:bg-gray-400
    }

    .avatar.status.away{
        @apply before:bg-warning-600 dark:before:bg-warning-500
    }

    .avatar.status.busy{
        @apply before:bg-danger-600 dark:before:bg-danger-400
    }

    .avatar.fallback-soft, .avatar.fallback-solid{
        @apply flex items-center justify-center font-medium
    }

    .avatar.fallback-soft.primary{
        @apply bg-primary-200 text-primary-800 dark:bg-primary-500/15 dark:text-primary-300
    }

    .avatar.fallback-soft.secondary{
        @apply bg-secondary-200 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300
    }

    .avatar.fallback-soft.accent{
        @apply bg-accent-200 text-accent-800 dark:bg-accent-500/15 dark:text-accent-300
    }

    .avatar.fallback-soft.info{
        @apply bg-info-200 text-info-800 dark:bg-info-500/15 dark:text-info-300
    }

    .avatar.fallback-soft.success{
        @apply bg-success-200 text-success-800 dark:bg-success-500/15 dark:text-success-300
    }

    .avatar.fallback-soft.danger{
        @apply bg-danger-200 text-danger-800 dark:bg-danger-500/15 dark:text-danger-300
    }

    .avatar.fallback-soft.warning{
        @apply bg-warning-200 text-warning-800 dark:bg-warning-500/15 dark:text-warning-300
    }

    .avatar.fallback-soft.gray{
        @apply bg-gray-200 text-gray-800 dark:bg-gray-500/15 dark:text-gray-300
    }

    .avatar.fallback-solid{
        @apply text-white
    }

    .avatar.fallback-solid.primary{
        @apply bg-primary-600
    }

    .avatar.fallback-solid.secondary{
        @apply bg-secondary-600
    }

    .avatar.fallback-solid.accent{
        @apply bg-accent-600
    }

    .avatar.fallback-solid.info{
        @apply bg-info-600
    }

    .avatar.fallback-solid.success{
        @apply bg-success-600
    }

    .avatar.fallback-solid.danger{
        @apply bg-danger-600
    }

    .avatar.fallback-solid.warning{
        @apply bg-warning-400 text-warning-950
    }

    .avatar.fallback-solid.gray{
        @apply bg-gray-600
    }

    .callout{
        @apply p-3 rounded-[--card-radius]
    }

    .callout-title{
        @apply font-medium text-[--title-text-color]
    }

    .callout-description{
        @apply text-[--body-text-color]
    }

    .callout-link{
        @apply text-[--title-text-color] underline font-medium
    }

    .callout.primary{
        @apply bg-primary-50 [--title-text-color:theme(colors.primary.900)] [--body-text-color:theme(colors.primary.600)] dark:bg-primary-500/10 dark:[--title-text-color:theme(colors.primary.300)] dark:[--body-text-color:theme(colors.primary.400)]
    }

    .callout.secondary{
        @apply bg-secondary-50 [--title-text-color:theme(colors.secondary.900)] [--body-text-color:theme(colors.secondary.600)] dark:bg-secondary-500/10 dark:[--title-text-color:theme(colors.secondary.300)] dark:[--body-text-color:theme(colors.secondary.400)]
    }

    .callout.accent{
        @apply bg-accent-50 [--title-text-color:theme(colors.accent.900)] [--body-text-color:theme(colors.accent.600)] dark:bg-accent-500/10 dark:[--title-text-color:theme(colors.accent.300)] dark:[--body-text-color:theme(colors.accent.400)]
    }

    .callout.info{
        @apply bg-info-50 [--title-text-color:theme(colors.info.900)] [--body-text-color:theme(colors.info.600)] dark:bg-info-500/10 dark:[--title-text-color:theme(colors.info.300)] dark:[--body-text-color:theme(colors.info.400)]
    }

    .callout.success{
        @apply bg-success-50 [--title-text-color:theme(colors.success.900)] [--body-text-color:theme(colors.success.600)] dark:bg-success-500/10 dark:[--title-text-color:theme(colors.success.300)] dark:[--body-text-color:theme(colors.success.400)]
    }

    .callout.danger{
        @apply bg-danger-50 [--title-text-color:theme(colors.danger.900)] [--body-text-color:theme(colors.danger.600)] dark:bg-danger-500/10 dark:[--title-text-color:theme(colors.danger.300)] dark:[--body-text-color:theme(colors.danger.400)]
    }

    .callout.warning{
        @apply bg-warning-50 [--title-text-color:theme(colors.warning.800)] [--body-text-color:theme(colors.warning.700)] dark:bg-warning-500/10 dark:[--title-text-color:theme(colors.warning.300)] dark:[--body-text-color:theme(colors.warning.400)]
    }

    .callout.gray{
        @apply bg-gray-100 [--title-text-color:theme(colors.gray.900)] [--body-text-color:theme(colors.gray.600)] dark:bg-gray-500/10 dark:[--title-text-color:theme(colors.gray.300)] dark:[--body-text-color:theme(colors.gray.400)]
    }
}`