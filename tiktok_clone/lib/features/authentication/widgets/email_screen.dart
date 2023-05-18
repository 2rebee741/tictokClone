import 'package:flutter/material.dart';
import 'package:tictokclone/constants/gaps.dart';
import 'package:tictokclone/constants/sizes.dart';
import 'package:tictokclone/features/authentication/widgets/form_button.dart';
import 'package:tictokclone/features/authentication/widgets/password_screen.dart';

class EmailScreenArgs {
  final String username;

  EmailScreenArgs({required this.username});
}

class EmailScreen extends StatefulWidget {
  static String routeName = "/email";
  // final String username;

  const EmailScreen({
    super.key,
  });

  @override
  State<EmailScreen> createState() => _EmailScreenState();
}

class _EmailScreenState extends State<EmailScreen> {
  final TextEditingController _emailController = TextEditingController();

  String _email = "";

  @override
  void initState() {
    super.initState(); // initstate - setstate - dispose - superdispost 순서 지키기
    _emailController.addListener(
      () {
        // print(_emailController.text); //event listener
        setState(() {
          _email = _emailController.text;
        });
      },
    );
  }

  @override
  void dispose() {
    //memory dispose (avoiding crash)
    _emailController.dispose();
    super.dispose();
  }

  void _onSubmit() {
    //press Next or done
    if (_email.isEmpty || _isEmailVaild() != null) return;
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const PasswordScreen(),
      ),
    );
  }

  String? _isEmailVaild() {
    if (_email.isEmpty) return null;
    final regExp = RegExp(
        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
    if (!regExp.hasMatch(_email)) {
      return "Email Not Valid";
    }
    return null;
  }

  void _onScaffoldTap() {
    FocusScope.of(context).unfocus();
  }

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as EmailScreenArgs;
    print(args.username);
    return GestureDetector(
      onTap: _onScaffoldTap,
      child: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: const Text(
            'Sign up',
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: Sizes.size36,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Gaps.v40,
              Text(
                'What is your email?, ${args.username}',
                style: const TextStyle(
                  fontSize: Sizes.size24,
                  fontWeight: FontWeight.w700,
                ),
              ),
              Gaps.v16,
              TextField(
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                onEditingComplete: _onSubmit,
                autocorrect: false,
                decoration: InputDecoration(
                  errorText: _isEmailVaild(),
                  hintText: "Email",
                  enabledBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.grey.shade400,
                    ),
                  ),
                  focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.grey.shade400,
                    ),
                  ),
                ),
                cursorColor: Theme.of(context).primaryColor,
              ),
              Gaps.v16,
              GestureDetector(
                  onTap: _onSubmit,
                  child: FormButton(
                      disabled: _email.isEmpty || _isEmailVaild() != null))
            ],
          ),
        ),
      ),
    );
  }
}
